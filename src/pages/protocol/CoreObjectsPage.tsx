import React from 'react';
import { useTranslation } from 'react-i18next';
import CoreObjectsSection from '../../components/protocol/CoreObjects';

const CoreObjectsPage: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('coreObjects.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        The fundamental data structures used in the A2A protocol
      </p>
      
      <CoreObjectsSection />
    </div>
  );
};

export default CoreObjectsPage;