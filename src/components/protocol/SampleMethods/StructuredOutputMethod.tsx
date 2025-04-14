import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const StructuredOutputMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const requestCode = `{
  "jsonrpc": "2.0",
  "id": 9,
  "method":"tasks/send",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "Show me a list of my open IT tickets",
        "metadata": {
          "mimeType": "application/json",
          "schema": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "ticketNumber": { "type": "string" },
                "description": { "type": "string" }
              }
            }
          }
        }
      }]
    },
    "metadata": {}
  }
}`;

  const responseCode = `{
  "jsonrpc": "2.0",
  "id": 9,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "working",
      "message": {
        "role": "agent",
        "parts": [{
            "type":"text",
            "text":"[{\\"ticketNumber\\":\\"REQ12312\\",\\"description\\":\\"request for VPN access\\"},{\\"ticketNumber\\":\\"REQ23422\\",\\"description\\":\\"Add to DL - team-gcp-onboarding\\"}]"
        }],
        "metadata": {}
      }
    },
    "metadata": {}
  }
}`;

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="structured-output">
        {t('sampleMethods.structuredOutput.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.structuredOutput.content')}
      </p>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Request with Schema</h4>
        <CodeBlock code={requestCode} language="json" />
      </div>
      
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">Response with Structured Data</h4>
        <CodeBlock code={responseCode} language="json" />
      </div>
    </div>
  );
};

export default StructuredOutputMethod;