import React from 'react';
import { useTranslation } from 'react-i18next';

const OverviewSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="overview">
        {t('overview.title')}
      </h2>

      {/* Actors */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" id="actors">
          {t('overview.actors.title')}
        </h3>
        <p className="text-gray-700 mb-2">
          {t('overview.actors.content')}
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li dangerouslySetInnerHTML={{ __html: t('overview.actors.user') }} />
          <li dangerouslySetInnerHTML={{ __html: t('overview.actors.client') }} />
          <li dangerouslySetInnerHTML={{ __html: t('overview.actors.remoteAgent') }} />
        </ul>
      </div>

      {/* Transport */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" id="transport">
          {t('overview.transport.title')}
        </h3>
        <p className="text-gray-700 mb-2">
          {t('overview.transport.content1')}
        </p>
        <p className="text-gray-700">
          {t('overview.transport.content2')} <a href="https://www.jsonrpc.org/specification" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JSON-RPC 2.0</a>
        </p>
      </div>

      {/* Async */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" id="async">
          {t('overview.async.title')}
        </h3>
        <p className="text-gray-700">
          {t('overview.async.content')} <a href="https://google.github.io/A2A/#/topics/push_notifications?id=remote-agent-to-client-updates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">push notifications</a>
        </p>
      </div>

      {/* Authentication and Authorization */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" id="authentication">
          {t('overview.authentication.title')}
        </h3>
        <p className="text-gray-700 mb-2">
          {t('overview.authentication.content1')}
        </p>
        <p className="text-gray-700 mb-2">
          {t('overview.authentication.content2')} <a href="https://swagger.io/docs/specification/v3_0/authentication/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">OpenAPI's Authentication specification</a>
        </p>
        <p className="text-gray-700 mb-2">
          {t('overview.authentication.content3')} <a href="#agent-card">Agent Card</a>. <a href="https://google.github.io/A2A/#/topics/agent_discovery?id=discovering-agent-cards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">this topic</a>.
        </p>
        <p className="text-gray-700 mb-2">
          {t('overview.authentication.content4')} <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WWW-Authenticate</a> <a href="https://google.github.io/A2A/#/topics/enterprise_ready" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Enterprise Ready</a>.
        </p>
        <blockquote className="border-l-4 border-gray-200 pl-4 py-2 my-4 text-gray-600 italic">
          <p dangerouslySetInnerHTML={{ __html: t('overview.authentication.note') }} />
        </blockquote>
      </div>
    </section>
  );
};

export default OverviewSection;