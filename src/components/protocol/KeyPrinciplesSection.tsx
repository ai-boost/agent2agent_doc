import React from 'react';
import { useTranslation } from 'react-i18next';

const KeyPrinciplesSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="key-principles">
        {t('keyPrinciples.title')}
      </h2>
      <p className="text-gray-700 mb-4">
        {t('keyPrinciples.content')}
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        {t('keyPrinciples.items', { returnObjects: true }).map((item: string, index: number) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-900 mb-2" id="detailed-discussions">
        {t('keyPrinciples.detailedDiscussions')}
      </h3>
      <ul className="list-disc pl-6 text-blue-600">
        <li><a href="https://google.github.io/A2A/#/topics/a2a_and_mcp?id=a2a-%e2%9d%a4%ef%b8%8f-mcp" target="_blank" rel="noopener noreferrer" className="hover:underline">A2A and MCP</a></li>
        <li><a href="https://google.github.io/A2A/#/topics/enterprise_ready?id=enterprise-readiness" target="_blank" rel="noopener noreferrer" className="hover:underline">Enterprise Ready</a></li>
        <li><a href="https://google.github.io/A2A/#/topics/push_notifications?id=remote-agent-to-client-updates" target="_blank" rel="noopener noreferrer" className="hover:underline">Push Notifications</a></li>
        <li><a href="https://google.github.io/A2A/#/topics/agent_discovery?id=discovering-agent-cards" target="_blank" rel="noopener noreferrer" className="hover:underline">Agent Discovery</a></li>
      </ul>
    </section>
  );
};

export default KeyPrinciplesSection;