import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Fuse from 'fuse.js';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchResult, SearchableContent } from '../types/search';
import { generateSearchIndex } from '../utils/searchUtils';

interface SearchContextType {
  searchTerm: string;
  searchResults: SearchResult[];
  isSearching: boolean;
  showResults: boolean;
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
  handleSearch: () => void;
  closeResults: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchIndex, setSearchIndex] = useState<Fuse<SearchableContent> | null>(null);
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Clear search results when navigating
  useEffect(() => {
    clearSearch();
  }, [location.pathname]);

  // Initialize or update search index when language changes
  useEffect(() => {
    const initSearchIndex = async () => {
      const index = await generateSearchIndex(i18n.language);
      setSearchIndex(index);
    };

    initSearchIndex();
  }, [i18n.language]);

  // Update search index when navigating to ensure all content is indexed
  useEffect(() => {
    const updateSearchIndex = async () => {
      if (searchIndex) {
        // Only rebuild if needed (e.g., returning to the site after some time)
        const index = await generateSearchIndex(i18n.language);
        setSearchIndex(index);
      }
    };
    
    updateSearchIndex();
  }, [location.pathname]);

  const handleSearch = () => {
    if (!searchTerm.trim() || !searchIndex) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    
    // Perform the search with improved options for better results
    const results = searchIndex.search(searchTerm, { 
      limit: 25  // Increased from 20 to 25 for more thorough results
    });
    
    setSearchResults(results.map(result => ({
      id: result.item.id,
      title: result.item.title,
      content: result.item.content,
      path: result.item.path,
      section: result.item.section
    })));
    
    setShowResults(true);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  const closeResults = () => {
    setShowResults(false);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        searchResults,
        isSearching,
        showResults,
        setSearchTerm,
        clearSearch,
        handleSearch,
        closeResults
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};