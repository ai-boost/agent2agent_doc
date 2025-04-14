import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const SendTaskMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const requestCode = `{
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
    "metadata": {}
  }
}`;

  const responseCode = `{
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

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="send-task">
        {t('sampleMethods.sendTask.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.sendTask.content')}
      </p>
      
      <div className="mb-4">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Request</h4>
        <CodeBlock code={requestCode} language="json" />
      </div>
      
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">Response</h4>
        <CodeBlock code={responseCode} language="json" />
      </div>
    </div>
  );
};

export default SendTaskMethod;