import React from 'react';
import { useTranslation } from 'react-i18next';

const FeedbackSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="feedback-and-changes">
        {t('feedbackAndChanges.title')}
      </h2>
      <p className="text-gray-700 mb-4">
        {t('feedbackAndChanges.content')}
      </p>
    </section>
  );
};

export default FeedbackSection;