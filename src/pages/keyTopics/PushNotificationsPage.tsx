import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bell, Zap, Wifi, WifiOff, Shield, Key, ExternalLink } from 'lucide-react';
import CodeBlock from '../../components/shared/CodeBlock';

const PushNotificationsPage: React.FC = () => {
  const { t } = useTranslation(['keyTopics', 'pushNotifications']);

  // Sample code blocks
  const agentCardExample = `{
  "name": "your-agent-name",
  "description": "your-agent-description"
  ...

  "capabilities": {
    "streaming": true,
    "pushNotifications": false,
    "stateTransitionHistory": false
  }

  ...
}`;

  const interfaceDefinition = `interface PushNotificationConfig {
  url: string;
  token?: string; // token unique to this task/session
  authentication?: {
    schemes: string[];
    credentials?: string;
  }
}

interface TaskPushNotificationConfig {
  id: string; //task id
  pushNotificationConfig: PushNotificationConfig;
}`;

  const requestExample = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",    
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "tell me a joke"
      }]   
    },
    "pushNotification": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["bearer"]
      }
    },
    "metadata": {}
  }
}`;

  const responseExample = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed",
    },
    "artifacts": [{
      "name":"joke",
      "parts": [{
          "type":"text",
          "text":"Why did the chicken cross the road? To get to the other side!"
        }]
      }],    
    "metadata": {}
  }
}`;

  const setPushExample = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/pushNotification/set",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",    
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["bearer"]
      }
    }
  }
}`;

  const setPushResponse = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",    
    "pushNotificationConfig": {
      "url": "https://example.com/callback",
      "authentication": {
        "schemes": ["bearer"]
      }
    }
  }
}`;

  const challengeExample = `GET https://abc.com/callback-path?validationToken=randomString
Content-Length: 0

HTTP/1.1 200 OK
Content-Type: text/plain

randomString`;

  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('pushNotifications:title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        {t('pushNotifications:description')}
      </p>
      
      {/* Introduction */}
      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:introduction.content')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:introduction.agentCardCapabilities')}
        </p>
      </section>
      
      {/* Agent Capabilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="capabilities">
          <Bell className="h-6 w-6 text-indigo-600 mr-2" />
          {t('pushNotifications:capabilities.title')}
        </h2>
        <p className="text-gray-700 mb-2">
          {t('pushNotifications:capabilities.agentCardExample')}
        </p>
        <CodeBlock code={agentCardExample} language="json" />
      </section>
      
      {/* Update Methods */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="update-methods">
          <Zap className="h-6 w-6 text-yellow-500 mr-2" />
          {t('pushNotifications:updateMethods.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:updateMethods.content')}
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li dangerouslySetInnerHTML={{ __html: t('pushNotifications:updateMethods.persistentConnection') }}></li>
          <li dangerouslySetInnerHTML={{ __html: t('pushNotifications:updateMethods.pushNotifications') }}></li>
        </ul>
        <p className="text-gray-700">
          {t('pushNotifications:updateMethods.notificationTiming')}
        </p>
      </section>
      
      {/* Connected */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="connected">
          <Wifi className="h-6 w-6 text-green-600 mr-2" />
          {t('pushNotifications:connected.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:connected.content')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:connected.taskSend')}
        </p>
        <p className="text-gray-700">
          {t('pushNotifications:connected.resubscribe')}
        </p>
      </section>
      
      {/* Disconnected */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="disconnected">
          <WifiOff className="h-6 w-6 text-red-600 mr-2" />
          {t('pushNotifications:disconnected.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:disconnected.content')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:disconnected.notificationService')}
        </p>
        <p className="text-gray-700">
          {t('pushNotifications:disconnected.simpleScenarios')}
        </p>
      </section>
      
      {/* Setting Task Notifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="setting-notifications">
          <Bell className="h-6 w-6 text-purple-600 mr-2" />
          {t('pushNotifications:settingNotifications.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:settingNotifications.content')}
        </p>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">
          {t('pushNotifications:settingNotifications.interfaceDefinition')}
        </h3>
        <div className="mb-6">
          <CodeBlock code={interfaceDefinition} language="typescript" />
        </div>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">
          {t('pushNotifications:settingNotifications.requestExample')}
        </h3>
        <div className="mb-6">
          <CodeBlock code={requestExample} language="json" />
        </div>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">
          {t('pushNotifications:settingNotifications.responseExample')}
        </h3>
        <div className="mb-6">
          <CodeBlock code={responseExample} language="json" />
        </div>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">
          {t('pushNotifications:settingNotifications.setPushExample')}
        </h3>
        <div className="mb-6">
          <CodeBlock code={setPushExample} language="json" />
        </div>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">
          {t('pushNotifications:settingNotifications.setPushResponse')}
        </h3>
        <div className="mb-6">
          <CodeBlock code={setPushResponse} language="json" />
        </div>
      </section>
      
      {/* Agent Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="agent-security">
          <Shield className="h-6 w-6 text-green-600 mr-2" />
          {t('pushNotifications:agentSecurity.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:agentSecurity.content')}
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>{t('pushNotifications:agentSecurity.verifyURL')}</li>
          <li>{t('pushNotifications:agentSecurity.challengeRequest')}</li>
          <li>{t('pushNotifications:agentSecurity.responseValidation')}</li>
          <li>{t('pushNotifications:agentSecurity.avoidDDOS')}</li>
          <li>{t('pushNotifications:agentSecurity.periodicCheck')}</li>
        </ul>
        
        <h3 className="text-lg font-semibold mt-6 mb-3">
          {t('pushNotifications:agentSecurity.challengeExample')}
        </h3>
        <div className="mb-6">
          <CodeBlock code={challengeExample} language="http" />
        </div>
        
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:agentSecurity.signValidation')}
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>{t('pushNotifications:agentSecurity.secretTypes.agentGenerated')}</li>
          <li>{t('pushNotifications:agentSecurity.secretTypes.sharedKey')}</li>
        </ul>
      </section>
      
      {/* Notification Receiver Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center" id="receiver-security">
          <Key className="h-6 w-6 text-blue-600 mr-2" />
          {t('pushNotifications:receiverSecurity.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('pushNotifications:receiverSecurity.content')}{' '}
          <a 
            href={t('pushNotifications:webhooksFyi')} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            webhooks.fyi
          </a>
        </p>
        
        <div className="bg-white p-4 border rounded-md shadow-sm mb-6">
          <p className="text-base font-medium mb-2">
            {t('pushNotifications:receiverSecurity.asymmetricKeys.title')}
          </p>
          <p className="text-gray-700 mb-2">
            {t('pushNotifications:receiverSecurity.asymmetricKeys.content')}
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">{t('pushNotifications:receiverSecurity.asymmetricKeys.serverGenerated')}</li>
            <li className="mb-2">
              {t('pushNotifications:receiverSecurity.asymmetricKeys.agentGenerated')}
              <ul className="list-disc pl-6 mt-1">
                <li>{t('pushNotifications:receiverSecurity.asymmetricKeys.options.manual')}</li>
                <li>{t('pushNotifications:receiverSecurity.asymmetricKeys.options.jwks')}</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-700">
            {t('pushNotifications:receiverSecurity.asymmetricKeys.signing')}
          </p>
        </div>
        
        <div className="bg-white p-4 border rounded-md shadow-sm mb-6">
          <p className="text-base font-medium mb-2">
            {t('pushNotifications:receiverSecurity.symmetricKeys.title')}
          </p>
          <p className="text-gray-700 mb-2">
            {t('pushNotifications:receiverSecurity.symmetricKeys.content')}
          </p>
          <p className="text-gray-700">
            {t('pushNotifications:receiverSecurity.symmetricKeys.advantage')}
          </p>
        </div>
        
        <div className="bg-white p-4 border rounded-md shadow-sm mb-6">
          <p className="text-base font-medium mb-2">
            {t('pushNotifications:receiverSecurity.oauth.title')}
          </p>
          <p className="text-gray-700">
            {t('pushNotifications:receiverSecurity.oauth.content')}
          </p>
        </div>
        
        <div className="bg-white p-4 border rounded-md shadow-sm mb-6">
          <p className="text-base font-medium mb-2">
            {t('pushNotifications:receiverSecurity.bearerToken.title')}
          </p>
          <p className="text-gray-700 mb-2">
            {t('pushNotifications:receiverSecurity.bearerToken.content')}
          </p>
          <p className="text-gray-700">
            {t('pushNotifications:receiverSecurity.bearerToken.security')}
          </p>
        </div>
      </section>
      
      {/* Other Considerations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4" id="other-considerations">
          {t('pushNotifications:otherConsiderations.title')}
        </h2>
        
        <div className="bg-white p-4 border rounded-md shadow-sm mb-6">
          <p className="text-base font-medium mb-2">
            {t('pushNotifications:otherConsiderations.replayPrevention.title')}
          </p>
          <p className="text-gray-700">
            {t('pushNotifications:otherConsiderations.replayPrevention.content')}
          </p>
        </div>
        
        <div className="bg-white p-4 border rounded-md shadow-sm">
          <p className="text-base font-medium mb-2">
            {t('pushNotifications:otherConsiderations.keyRotation.title')}
          </p>
          <p className="text-gray-700">
            {t('pushNotifications:otherConsiderations.keyRotation.content')}
          </p>
        </div>
      </section>
      
      {/* References */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Related Documents</h3>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://google.github.io/A2A/#/topics/push_notifications?id=remote-agent-to-client-updates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Official A2A Push Notifications Documentation
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
          <li>
            <a 
              href="https://webhooks.fyi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Webhooks.fyi - Best Practices for Webhook Security
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/google/A2A/tree/main/samples/python/hosts/cli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              A2A CLI with Push Notification Examples
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PushNotificationsPage;