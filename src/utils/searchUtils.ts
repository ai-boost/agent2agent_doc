import Fuse from 'fuse.js';
import { SearchableContent } from '../types/search';
import { getContentByLanguage } from './contentUtils';

// This function generates the search index based on language
export const generateSearchIndex = async (language: string): Promise<Fuse<SearchableContent>> => {
  const searchableContent = await getContentByLanguage(language);
  
  // Configure Fuse.js options
  const options = {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'content', weight: 2 },
      { name: 'section', weight: 1 }
    ],
    threshold: 0.4,           // Increased from 0.3 to be more lenient
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,     // Better for non-English languages
    useExtendedSearch: true,  // Enable extended search for more flexible matching
    minMatchCharLength: 2     // Reduced from default for better CJK language support
  };
  
  return new Fuse(searchableContent, options);
};