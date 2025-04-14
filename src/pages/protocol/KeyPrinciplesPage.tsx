import React from 'react';
import { useTranslation } from 'react-i18next';
import KeyPrinciplesSection from '../../components/protocol/KeyPrinciplesSection';

const KeyPrinciplesPage: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('keyPrinciples.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        Core design principles and philosophies behind the A2A protocol
      </p>
      
      <KeyPrinciplesSection />
    </div>
  );
};

export default KeyPrinciplesPage;