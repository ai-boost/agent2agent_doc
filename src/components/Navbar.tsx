import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { searchTerm, setSearchTerm, handleSearch } = useSearch();
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  // Focus search input when pressing Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handle search on Enter key
  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-2 lg:px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-2xl font-medium flex items-center pl-2">
                <span className="italic font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Agent2Agent
                </span>
              </NavLink>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink to="/" 
                className={({isActive}) => 
                  isActive 
                    ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }
              >
                {t('sections.home')}
              </NavLink>
              <NavLink to="/docs" 
                className={({isActive}) => 
                  isActive || location.pathname.startsWith('/docs')
                    ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }
              >
                {t('sections.docs')}
              </NavLink>
              <NavLink to="/community" 
                className={({isActive}) => 
                  isActive 
                    ? "border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" 
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                }
              >
                {t('sections.community')}
              </NavLink>
            </div>
          </div>
          <div className="flex sm:ml-6 sm:items-center">
            <div className="relative">
              <div className="relative rounded-full shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-24 py-2 sm:text-sm border-none rounded-full bg-gray-50"
                  placeholder={t('search')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <kbd className="hidden sm:inline-flex h-5 w-5 items-center justify-center rounded border border-gray-200 bg-gray-100 text-xs text-gray-400">
                    ⌘
                  </kbd>
                  <kbd className="hidden sm:inline-flex h-5 w-5 items-center justify-center rounded border border-gray-200 bg-gray-100 text-xs text-gray-400 ml-1">
                    K
                  </kbd>
                </div>
              </div>
            </div>
            <div className="ml-4 relative">
              <button
                type="button"
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe className="h-5 w-5 text-gray-500" />
              </button>

              {languageMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`${
                      i18n.language === 'en' ? 'bg-gray-50' : ''
                    } block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-50 transition-colors`}
                  >
                    {t('langEn')}
                  </button>
                  <button
                    onClick={() => changeLanguage('zh')}
                    className={`${
                      i18n.language === 'zh' ? 'bg-gray-50' : ''
                    } block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-50 transition-colors`}
                  >
                    {t('langZh')}
                  </button>
                  <button
                    onClick={() => changeLanguage('ja')}
                    className={`${
                      i18n.language === 'ja' ? 'bg-gray-50' : ''
                    } block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-50 transition-colors`}
                  >
                    {t('langJa')}
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({isActive}) => 
                isActive
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              {t('sections.home')}
            </NavLink>
            <NavLink
              to="/docs"
              className={({isActive}) => 
                isActive || location.pathname.startsWith('/docs')
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              {t('sections.docs')}
            </NavLink>
            <NavLink
              to="/community"
              className={({isActive}) => 
                isActive
                  ? "bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              {t('sections.community')}
            </NavLink>
          </div>
          
          {/* Mobile search */}
          <div className="pt-2 pb-3 px-4">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2 sm:text-sm border-gray-300 rounded-md"
                placeholder={t('search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
            </div>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Globe className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{t('language')}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button
                onClick={() => {
                  changeLanguage('en');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 w-full text-left"
              >
                {t('langEn')}
              </button>
              <button
                onClick={() => {
                  changeLanguage('zh');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 w-full text-left"
              >
                {t('langZh')}
              </button>
              <button
                onClick={() => {
                  changeLanguage('ja');
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 w-full text-left"
              >
                {t('langJa')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;