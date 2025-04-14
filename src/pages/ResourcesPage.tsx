import React from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { ExternalLink, Book, Star } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const { t } = useTranslation('resources');
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8" id="resources-title">
          {t('title')}
        </h1>

        {/* Awesome A2A section */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <Star className="h-7 w-7 text-yellow-500 mr-3 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900" id="awesome-a2a">
                {t('awesomeA2a.title')}
              </h2>
            </div>
            
            <p className="text-gray-700 mb-4">
              {t('awesomeA2a.description')}
            </p>
            
            <a 
              href="https://github.com/ai-boost/awesome-a2a" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Star className="h-4 w-4 mr-2" />
              Awesome A2A Repository
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="official-resources">
            {t('officialResources.title')}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('officialResources.website')} />
                <a 
                  href="https://google.github.io/A2A" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('officialResources.github')} />
                <a 
                  href="https://github.com/google/A2A" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/google/A2A
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('officialResources.blog')} />
                <a 
                  href="https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  developers.googleblog.com
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="specification">
            {t('specification.title')}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.docs')} />
                <a 
                  href="https://google.github.io/A2A/#/documentation" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A/#/documentation
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.json')} />
                <a 
                  href="https://github.com/google/A2A/tree/main/specification/json" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/google/A2A/tree/main/specification/json
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.principles')} />
                <a 
                  href="https://google.github.io/A2A/#/documentation?id=key-principles" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A/#/documentation?id=key-principles
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.agentCard')} />
                <a 
                  href="https://google.github.io/A2A/#/documentation?id=agent-card" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A/#/documentation?id=agent-card
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.discovery')} />
                <a 
                  href="https://google.github.io/A2A/#/topics/agent_discovery.md" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A/#/topics/agent_discovery.md
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.push')} />
                <a 
                  href="https://google.github.io/A2A/#/topics/push_notifications.md" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A/#/topics/push_notifications.md
                </a>
              </div>
            </li>
            <li className="flex items-start">
              <ExternalLink className="h-6 w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <div className="prose prose-indigo max-w-none">
                <MarkdownRenderer content={t('specification.enterprise')} />
                <a 
                  href="https://google.github.io/A2A/#/topics/enterprise_ready.md" 
                  className="text-indigo-600 hover:text-indigo-900 ml-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  google.github.io/A2A/#/topics/enterprise_ready.md
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ResourcesPage;