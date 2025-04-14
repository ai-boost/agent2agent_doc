import React from 'react';
import { useTranslation } from 'react-i18next';
import FeedbackSection from '../../components/protocol/FeedbackSection';

const FeedbackPage: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('feedbackAndChanges.title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        Providing feedback on the A2A protocol
      </p>
      
      <FeedbackSection />
    </div>
  );
};

export default FeedbackPage;