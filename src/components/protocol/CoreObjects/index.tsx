import React from 'react';
import { useTranslation } from 'react-i18next';
import TaskSection from './TaskSection';
import ArtifactSection from './ArtifactSection';
import MessageSection from './MessageSection';
import PartSection from './PartSection';
import PushNotificationSection from './PushNotificationSection';

const CoreObjectsSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="core-objects">
        {t('coreObjects.title')}
      </h2>

      <TaskSection />
      <ArtifactSection />
      <MessageSection />
      <PartSection />
      <PushNotificationSection />
    </section>
  );
};

export default CoreObjectsSection;