import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const PushNotificationSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const pushNotificationCode = `interface PushNotificationConfig {
  url: string;
  token?: string; // token unique to this task/session
  authentication?: {
    schemes: string[];
    credentials?: string;
  };
}
interface TaskPushNotificationConfig {
  id: string; //task id
  pushNotificationConfig: PushNotificationConfig;
}`;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2" id="push-notifications">
        {t('coreObjects.pushNotifications.title')}
      </h3>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.pushNotifications.content1')}
      </p>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.pushNotifications.content2')}
      </p>
      <p className="text-gray-700 mb-4">
        {t('coreObjects.pushNotifications.content3')}
      </p>
      
      <CodeBlock code={pushNotificationCode} language="typescript" />
    </div>
  );
};

export default PushNotificationSection;