import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import CodeBlock from '../../components/shared/CodeBlock';

const AgentDiscoveryPage: React.FC = () => {
  const { t } = useTranslation(['keyTopics', 'agentDiscovery']);
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('agentDiscovery:title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        {t('agentDiscovery:description')}
      </p>
      
      <div className="mb-8">
        <p className="text-gray-700 mb-2">
          {t('agentDiscovery:introduction.content')}
        </p>
        <p className="text-gray-700 font-medium">
          {t('agentDiscovery:introduction.currentThinking')}
        </p>
      </div>
      
      {/* Open Discovery */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="open-discovery">
          {t('agentDiscovery:openDiscovery.title')}
        </h2>
        <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('agentDiscovery:openDiscovery.content') }}>
        </p>
        <p className="text-gray-700">
          {t('agentDiscovery:openDiscovery.webCrawlers')}
        </p>

        <div className="my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-800">Example Discovery Flow</h3>
              <div className="mt-2 text-sm text-gray-600">
                <ol className="list-decimal list-inside space-y-1">
                  <li>Client knows agent domain: <code>chat.example.com</code></li>
                  <li>Client makes HTTP GET to <code>https://chat.example.com/.well-known/agent.json</code></li>
                  <li>Server returns the AgentCard JSON document</li>
                  <li>Client connects to chat.example.com using A2A protocol</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Curated Discovery */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="curated-discovery">
          {t('agentDiscovery:curatedDiscovery.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('agentDiscovery:curatedDiscovery.content')}
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-800">
            {t('agentDiscovery:curatedDiscovery.consideration')}
          </p>
        </div>
      </section>
      
      {/* Private Discovery */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="private-discovery">
          {t('agentDiscovery:privateDiscovery.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('agentDiscovery:privateDiscovery.content')}
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-800">
            {t('agentDiscovery:privateDiscovery.consideration')}
          </p>
        </div>
      </section>
      
      {/* Securing Agent Cards */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="securing-agent-cards">
          {t('agentDiscovery:securingAgentCards.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('agentDiscovery:securingAgentCards.content')}
        </p>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <p className="text-red-800 font-medium">
            {t('agentDiscovery:securingAgentCards.recommendation')}
          </p>
        </div>
      </section>
      
      {/* References */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Related Documents</h3>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://google.github.io/A2A/#/topics/agent_discovery?id=discovering-agent-cards" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Official A2A Agent Discovery Documentation
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
          <li>
            <a 
              href="https://google.github.io/A2A/#/documentation?id=agent-card" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Agent Card Specification
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgentDiscoveryPage;