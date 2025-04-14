import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../components/shared/CodeBlock';
import MarkdownRenderer from '../../components/MarkdownRenderer';

const A2AandMCPPage: React.FC = () => {
  const { t } = useTranslation(['keyTopics', 'a2aAndMcp']);
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('a2aAndMcp:title')}
      </h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded">
        <p className="font-medium">
          <strong>TLDR:</strong> {t('a2aAndMcp:tldr')}
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="why-protocols">
          {t('a2aAndMcp:whyProtocols.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('a2aAndMcp:whyProtocols.content')}
        </p>
        <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:whyProtocols.tools') }}></p>
        <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:whyProtocols.agents') }}></p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="complementary">
          {t('a2aAndMcp:complementary.title')}
        </h2>
        <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:complementary.mcp') }}></p>
        <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:complementary.a2a') }}></p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="example">
          {t('a2aAndMcp:example.title')}
        </h2>
        <p className="text-gray-700 mb-2">
          {t('a2aAndMcp:example.scenario')}
        </p>
        <div className="bg-gray-50 p-4 rounded-md mb-4" dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:example.autoShop') }}></div>
        <p className="text-gray-700 mb-4">
          {t('a2aAndMcp:example.modelingShop')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:example.mcpUsage') }}></li>
          <li dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:example.a2aUsage') }}></li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="intersection">
          {t('a2aAndMcp:intersection.title')}
        </h2>
        <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: t('a2aAndMcp:intersection.content') }}></p>
        
        <div className="flex justify-center mb-4">
          <img 
            src="https://google.github.io/A2A/images/a2a_mcp.png" 
            alt={t('a2aAndMcp:intersection.imageAlt')}
            className="max-w-full rounded shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default A2AandMCPPage;