import React from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../components/MarkdownRenderer';

const GettingStartedPage: React.FC = () => {
  const { t } = useTranslation('getting-started');
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6" id="getting-started-title">
          {t('title')}
        </h1>
        
        <p className="text-xl text-gray-500 mb-10">
          {t('introduction')}
        </p>

        <div className="space-y-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900" id="understand-basics">
                {t('steps.basics.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('steps.basics.description')} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900" id="explore-core">
                {t('steps.core.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('steps.core.description')} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900" id="see-in-action">
                {t('steps.action.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('steps.action.description')} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900" id="run-samples">
                {t('steps.samples.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('steps.samples.description')} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900" id="review-code">
                {t('steps.code.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('steps.code.description')} />
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900" id="try-building">
                {t('steps.build.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('steps.build.description')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;