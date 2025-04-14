import React from 'react';
import { useTranslation } from 'react-i18next';

const CommunicationSection: React.FC = () => {
  const { t } = useTranslation(['protocol']);
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="agent-to-agent-communication">
        {t('protocol:communication.title')}
      </h2>
      <p className="text-gray-700 mb-2">
        {t('protocol:communication.content')}
      </p>
      <p className="text-gray-700">
        {t('protocol:communication.content2')}
      </p>
    </section>
  );
};

export default CommunicationSection;