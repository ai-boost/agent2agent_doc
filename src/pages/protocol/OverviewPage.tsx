import React from 'react';
import { useTranslation } from 'react-i18next';
import OverviewSection from '../../components/protocol/OverviewSection';

const OverviewPage: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('overview.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        High-level overview of the A2A protocol architecture
      </p>
      
      <div className="my-8">
        <img 
          src="https://google.github.io/A2A/images/a2a_actors.png" 
          alt="A2A Actors Diagram"
          className="w-4/5 mx-auto rounded-lg shadow-sm"
        />
      </div>
      
      <OverviewSection />
    </div>
  );
};

export default OverviewPage;