import React from 'react';
import { useTranslation } from 'react-i18next';
import AgentCardSection from '../../components/protocol/AgentCardSection';

const AgentCardPage: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('agentCard.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        Detailed explanation of the Agent Card structure and its discovery mechanism
      </p>
      
      <AgentCardSection />
    </div>
  );
};

export default AgentCardPage;