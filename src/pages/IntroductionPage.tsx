import React from 'react';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../components/MarkdownRenderer';

const IntroductionPage: React.FC = () => {
  const { t } = useTranslation('introduction');
  
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8" id="introduction-title">
          {t('title')}
        </h1>

        <div className="mb-12">
          <img 
            src="https://google.github.io/A2A/images/a2a_banner.png" 
            alt="A2A Protocol Banner" 
            className="w-full h-auto rounded-lg shadow-sm mb-8"
          />
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="unlock-collaborative">
            {t('unlockCollaborative.title')}
          </h2>
          
          <img 
            src="https://google.github.io/A2A/images/a2a_main.png" 
            alt="A2A Main Concept" 
            className="w-4/5 mx-auto my-6 rounded-lg shadow-sm"
          />

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
            <li className="mb-2">
              <strong>{t('unlockCollaborative.seamlessCollaboration')}</strong>: {t('unlockCollaborative.seamlessCollaborationDesc')}
            </li>
            <li className="mb-2">
              <strong>{t('unlockCollaborative.enterpriseIntegration')}</strong>: {t('unlockCollaborative.enterpriseIntegrationDesc')}
            </li>
            <li className="mb-2">
              <strong>{t('unlockCollaborative.enterpriseRequirements')}</strong>: {t('unlockCollaborative.enterpriseRequirementsDesc')}
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="open-standards">
            {t('openStandards.title')}
          </h2>
          
          <img 
            src="https://google.github.io/A2A/images/a2a_mcp_readme.png" 
            alt="A2A and MCP Diagram" 
            className="w-4/5 mx-auto my-6 rounded-lg shadow-sm"
          />

          <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">
            <li>
              <strong>{t('openStandards.mcp.title')}</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('openStandards.mcp.point1')}</li>
                <li>{t('openStandards.mcp.point2')}</li>
              </ul>
            </li>
            <li>
              <strong>{t('openStandards.a2a.title')}</strong>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>{t('openStandards.a2a.point1')}</li>
                <li>{t('openStandards.a2a.point2')}</li>
                <li>{t('openStandards.a2a.point3')}</li>
              </ul>
            </li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="feedback">
            {t('feedback.title')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('feedback.workInProgress')} <a href="https://github.com/google/A2A/tree/main/samples" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800">sample code</a>.
          </p>
          <p className="text-gray-700 mb-4">
            {t('feedback.blogPost')} <a href="https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800">public blog post</a>
          </p>
          <p className="text-gray-700">
            {t('feedback.contribute')} <a href="https://github.com/google/A2A" target="_blank" rel="noopener" className="text-blue-600 hover:text-blue-800">Github</a>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="what-is-a2a">
            {t('whatIsA2A.title')}
          </h2>
          <div className="prose prose-blue max-w-none">
            <MarkdownRenderer content={t('whatIsA2A.description')} />
            
            <p className="text-gray-700 mt-4">
              <strong>{t('whatIsA2A.officialWebsite')}</strong>{' '}
              <a 
                href="https://google.github.io/A2A" 
                className="text-blue-600 hover:text-blue-900" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                google.github.io/A2A
              </a>
            </p>
            
            <p className="text-gray-700">
              <strong>{t('whatIsA2A.officialGitHub')}</strong>{' '}
              <a 
                href="https://github.com/google/A2A" 
                className="text-blue-600 hover:text-blue-900" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                github.com/google/A2A
              </a>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="key-principles">
            {t('keyPrinciples.title')}
          </h2>
          <div className="prose prose-blue max-w-none space-y-2">
            <MarkdownRenderer content={t('keyPrinciples.simple')} />
            <MarkdownRenderer content={t('keyPrinciples.enterpriseReady')} />
            <MarkdownRenderer content={t('keyPrinciples.asyncFirst')} />
            <MarkdownRenderer content={t('keyPrinciples.modalityAgnostic')} />
            <MarkdownRenderer content={t('keyPrinciples.opaqueExecution')} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="how-it-works">
            {t('howItWorks.title')}
          </h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li className="prose prose-blue max-w-none">
              <MarkdownRenderer content={t('howItWorks.discovery')} />
            </li>
            <li className="prose prose-blue max-w-none">
              <MarkdownRenderer content={t('howItWorks.communication')} />
            </li>
            <li className="prose prose-blue max-w-none">
              <MarkdownRenderer content={t('howItWorks.execution')} />
            </li>
            <li className="prose prose-blue max-w-none">
              <MarkdownRenderer content={t('howItWorks.updates')} />
            </li>
          </ol>
          <div className="prose prose-blue max-w-none mt-6 italic">
            <MarkdownRenderer content={t('howItWorks.details')} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntroductionPage;