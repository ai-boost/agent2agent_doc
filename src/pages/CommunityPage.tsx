import React from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { MessageSquare, Bug, PenTool, Video, Star } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const { t } = useTranslation('community');
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6" id="community-title">
          {t('title')}
        </h1>
        
        <p className="text-xl text-gray-500 mb-10">
          {t('description')}
        </p>

        {/* Awesome A2A Section */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg shadow overflow-hidden">
            <div className="px-4 py-5 sm:px-6 flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900" id="awesome-a2a">
                Awesome A2A
              </h2>
            </div>
            <div className="border-t border-blue-100 px-4 py-5 sm:p-6">
              <p className="text-gray-700 mb-4">
                A curated list of awesome resources, implementations, tools, and examples related to the Google Agent2Agent (A2A) Protocol for AI agent interoperability. This community-maintained repository collects the best A2A resources in one place.
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/ai-boost/awesome-a2a"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Awesome A2A Repository
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 flex items-center">
              <Bug className="h-6 w-6 text-indigo-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900" id="issues">
                {t('resources.issues.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <p className="text-gray-500">
                {t('resources.issues.description')}
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/google/A2A/issues"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Issues
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 flex items-center">
              <MessageSquare className="h-6 w-6 text-indigo-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900" id="discussions">
                {t('resources.discussions.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <p className="text-gray-500">
                {t('resources.discussions.description')}
              </p>
              <div className="mt-4">
                <a
                  href="https://github.com/google/A2A/discussions"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discussions
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 bg-gray-50 flex items-center">
              <PenTool className="h-6 w-6 text-indigo-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-900" id="feedback-form">
                {t('resources.feedback.title')}
              </h2>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <p className="text-gray-500">
                {t('resources.feedback.description')}
              </p>
              <div className="mt-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScS23OMSKnVFmYeqS2dP7dxY3eTyT7lmtGLUa8OJZfP4RTijQ/viewform"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Feedback
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="tutorials">
            {t('tutorials.title')}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('tutorials.overview')} />
              </div>
            </li>
            <li className="flex items-start">
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('tutorials.guide')} />
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="demos">
            {t('demos.title')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6 bg-gray-50 flex items-center">
                <Video className="h-6 w-6 text-indigo-500 mr-2" />
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Demo Video
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://storage.googleapis.com/gweb-developer-goog-blog-assets/original_videos/A2A_demo_v4.mp4" 
                    allowFullScreen
                    className="w-full h-64 md:h-96 rounded-lg border border-gray-200"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500">
                    Official demo video showcasing the A2A protocol in action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="contributing">
            {t('contributing.title')}
          </h2>
          <p className="text-gray-700">
            {t('contributing.description')}
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/google/A2A/blob/main/CONTRIBUTING.md"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Contributing Guidelines
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;