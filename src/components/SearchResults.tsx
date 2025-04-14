import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SearchResults: React.FC = () => {
  const { searchResults, searchTerm, isSearching, showResults, closeResults } = useSearch();
  const { t, i18n } = useTranslation('common');

  if (!showResults) return null;

  // Format result content to highlight match and provide context
  const formatResultContent = (result: any) => {
    // Extract relevant parts of the content for preview
    const content = result.content || '';
    let preview = content;
    
    // If the search term exists in the content, try to center the preview on that
    if (content.toLowerCase().includes(searchTerm.toLowerCase())) {
      const index = content.toLowerCase().indexOf(searchTerm.toLowerCase());
      const start = Math.max(0, index - 60);
      const end = Math.min(content.length, index + 60 + searchTerm.length);
      preview = (start > 0 ? '...' : '') + 
                content.substring(start, end) + 
                (end < content.length ? '...' : '');
    } else {
      // Otherwise just take the first ~120 characters
      preview = content.length > 120 ? content.substring(0, 120) + '...' : content;
    }

    return preview;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[70vh] overflow-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">
            {t('searchResults')}: "{searchTerm}"
          </h2>
          <button 
            onClick={closeResults}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-4">
          {isSearching ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              {t('noResults')}
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-500 mb-4">
                {i18n.language === 'zh' ? `找到 ${searchResults.length} 个结果` : 
                 i18n.language === 'ja' ? `${searchResults.length} 件の結果が見つかりました` : 
                 `Found ${searchResults.length} results`}
              </p>
              <ul className="divide-y divide-gray-200">
                {searchResults.map((result) => (
                  <li key={result.id} className="py-4">
                    <Link 
                      to={result.path} 
                      className="block hover:bg-gray-50 p-2 rounded-md"
                      onClick={closeResults}
                    >
                      <div className="text-sm font-medium text-blue-600">{result.section}</div>
                      <div className="text-lg font-medium text-gray-900">{result.title}</div>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-3">{formatResultContent(result)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;