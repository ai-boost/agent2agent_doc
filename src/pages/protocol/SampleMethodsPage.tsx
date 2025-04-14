import React from 'react';
import { useTranslation } from 'react-i18next';
import SampleMethodsSection from '../../components/protocol/SampleMethods';

const SampleMethodsPage: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('sampleMethods.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        Examples of API methods and their usage in the A2A protocol
      </p>
      
      <SampleMethodsSection />
    </div>
  );
};

export default SampleMethodsPage;