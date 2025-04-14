import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const MultiTurnMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const request1Code = `{
  "jsonrpc": "2.0",
  "id": 1,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "request a new phone for me"
      }]
    },
    "metadata": {}
  }
}`;

  const response1Code = `{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "input-required",
      "message": {
        "parts": [{
          "type":"text",
          "text":"Select a phone type (iPhone/Android)"
        }]
      }
    },
    "metadata": {}
  }
}`;

  const request2Code = `{
  "jsonrpc": "2.0",
  "id": 2,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "Android"
      }]
    },
    "metadata": {}
  }
}`;

  const response2Code = `{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "id": 1,
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed"
    },
    "artifacts": [{
      "name": "order-confirmation",
      "parts": [{
          "type":"text",
          "text":"I have ordered a new Android device for you. Your request number is R12443"
        }],
      "metadata": {}
    }],
    "metadata": {}
  }
}`;

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="multi-turn-conversations">
        {t('sampleMethods.multiTurn.title')}
      </h3>
      <p className="text-gray-700 mb-3">
        {t('sampleMethods.multiTurn.content')}
      </p>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.multiTurn.content2')}
      </p>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Step 1: Initial Request</h4>
        <CodeBlock code={request1Code} language="json" />
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Step 2: Agent Requests More Information</h4>
        <CodeBlock code={response1Code} language="json" />
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Step 3: User Provides Information</h4>
        <CodeBlock code={request2Code} language="json" />
      </div>

      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">Step 4: Agent Completes Task</h4>
        <CodeBlock code={response2Code} language="json" />
      </div>
    </div>
  );
};

export default MultiTurnMethod;