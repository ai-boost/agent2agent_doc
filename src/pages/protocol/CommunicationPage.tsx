import React from 'react';
import { useTranslation } from 'react-i18next';
import CommunicationSection from '../../components/protocol/CommunicationSection';

const CommunicationPage: React.FC = () => {
  const { t } = useTranslation(['protocol']);
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('protocol:communication.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        How agents communicate with each other using the A2A protocol
      </p>
      
      <CommunicationSection />
    </div>
  );
};

export default CommunicationPage;