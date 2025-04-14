import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, FileCode, Rocket, Globe } from 'lucide-react';

const DocsLandingPage: React.FC = () => {
  const { t } = useTranslation('home');
  
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            A2A Documentation
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
          Comprehensive documentation for the A2A protocol
        </p>
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 px-4 sm:px-6 lg:px-0">
        <Link to="/docs/introduction" className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 hover:bg-blue-50">
          <div className="p-8 text-center">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              {t('featuredSections.principles.title')}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {t('featuredSections.principles.description')}
            </p>
          </div>
        </Link>

        <Link to="/docs/getting-started" className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 hover:bg-indigo-50">
          <div className="p-8 text-center">
            <div className="bg-indigo-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              {t('featuredSections.gettingStarted.title')}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {t('featuredSections.gettingStarted.description')}
            </p>
          </div>
        </Link>

        <Link to="/docs/resources" className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 hover:bg-purple-50">
          <div className="p-8 text-center">
            <div className="bg-purple-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              {t('featuredSections.resources.title')}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {t('featuredSections.resources.description')}
            </p>
          </div>
        </Link>

        <Link to="/docs/implementations" className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 hover:bg-pink-50">
          <div className="p-8 text-center">
            <div className="bg-pink-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
              <FileCode className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900">
              {t('featuredSections.implementation.title')}
            </h3>
            <p className="mt-3 text-base text-gray-500">
              {t('featuredSections.implementation.description')}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DocsLandingPage;