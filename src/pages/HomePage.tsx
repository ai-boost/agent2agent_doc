import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, FileCode, Users, Globe, Rocket } from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const HomePage: React.FC = () => {
  const { t } = useTranslation('home');
  
  return (
    <div className="bg-white">
      {/* Hero Section with improved styling */}
      <div className="relative py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="italic bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                {t('hero.title')}
              </span>
            </h1>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                <MarkdownRenderer content={t('hero.description')} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction with improved spacing and styling */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            {t('introduction.title')}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Agent2Agent Protocol
          </p>
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="prose prose-lg prose-blue mx-auto text-gray-600">
              <MarkdownRenderer content={t('introduction.description')} />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections with improved card styling */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              {t('featuredSections.title')}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A2A Documentation
            </p>
            <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-600">
              {t('featuredSections.description')}
            </p>
          </div>

          <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8 text-center">
                <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {t('featuredSections.principles.title')}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {t('featuredSections.principles.description')}
                </p>
                <Link
                  to="/docs/introduction"
                  className="mt-6 inline-flex items-center px-5 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8 text-center">
                <div className="bg-indigo-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Rocket className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {t('featuredSections.gettingStarted.title')}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {t('featuredSections.gettingStarted.description')}
                </p>
                <Link
                  to="/docs/getting-started"
                  className="mt-6 inline-flex items-center px-5 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  Get started
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8 text-center">
                <div className="bg-purple-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {t('featuredSections.resources.title')}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {t('featuredSections.resources.description')}
                </p>
                <Link
                  to="/docs/resources"
                  className="mt-6 inline-flex items-center px-5 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  Explore resources
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8 text-center">
                <div className="bg-pink-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <FileCode className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {t('featuredSections.implementation.title')}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {t('featuredSections.implementation.description')}
                </p>
                <Link
                  to="/docs/implementations"
                  className="mt-6 inline-flex items-center px-5 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  View implementations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with improved styling and explicitly set white text */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-md overflow-hidden py-16 px-6 sm:py-20 sm:px-12 lg:p-24 text-center">
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">{t('cta.title')}</span>
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-6 text-gray-600">
                {t('cta.description')}
              </p>
              <Link
                to="/docs/protocol/overview"
                className="mt-8 inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-gray-50 focus:outline-none"
              >
                {t('cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;