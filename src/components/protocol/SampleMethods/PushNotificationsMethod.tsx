import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const PushNotificationsMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const setRequestCode = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/pushNotification/set",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["jwt"]
      }
    }
  }
}`;

  const setResponseCode = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["jwt"]
      }
    }
  }
}`;

  const getRequestCode = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/pushNotification/get",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64"
  }
}`;

  const getResponseCode = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["jwt"]
      }
    }
  }
}`;

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3" id="set-push-notifications">
          {t('sampleMethods.setPushNotifications.title')}
        </h3>
        <p className="text-gray-700 mb-4">
          {t('sampleMethods.setPushNotifications.content')}
        </p>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Request</h4>
          <CodeBlock code={setRequestCode} language="json" />
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">Response</h4>
          <CodeBlock code={setResponseCode} language="json" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3" id="get-push-notifications">
          {t('sampleMethods.getPushNotifications.title')}
        </h3>
        <p className="text-gray-700 mb-4">
          {t('sampleMethods.getPushNotifications.content')}
        </p>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium text-gray-800 mb-2">Request</h4>
          <CodeBlock code={getRequestCode} language="json" />
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-2">Response</h4>
          <CodeBlock code={getResponseCode} language="json" />
        </div>
      </div>
    </div>
  );
};

export default PushNotificationsMethod;