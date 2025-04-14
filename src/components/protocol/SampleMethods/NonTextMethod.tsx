import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const NonTextMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const request1Code = `{
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
        "text": "Analyze the attached report and generate high level overview"
      },{
        "type":"file",
        "file": {
           "mimeType": "application/pdf",
           "data":"<base64-encoded-content>"
        }
      }]
    },
    "metadata": {}
  }
}`;

  const response1Code = `{
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
          "text":"analysis in progress, please wait"
        }],
        "metadata": {}
       }
     },
    "metadata": {}
  }
}`;

  const request2Code = `{
  "jsonrpc": "2.0",
  "id": 10,
  "method":"tasks/get",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "metadata": {}
  }
}`;

  const response2Code = `{
  "jsonrpc": "2.0",
  "id": 9,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "status": {
      "state": "completed"
     },
    "artifacts": [{
      "parts": [{
        "type":"text",
        "text":"<generated analysis content>"
       }],
       "metadata": {}
     }],
    "metadata": {}
  }
}`;

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="non-textual-media">
        {t('sampleMethods.nonTextMedia.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.nonTextMedia.content')}
      </p>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Initial Request (Sending a PDF)</h4>
        <CodeBlock code={request1Code} language="json" />
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Initial Response (Processing Status)</h4>
        <CodeBlock code={response1Code} language="json" />
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Checking Status Request</h4>
        <CodeBlock code={request2Code} language="json" />
      </div>

      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">Final Response with Results</h4>
        <CodeBlock code={response2Code} language="json" />
      </div>
    </div>
  );
};

export default NonTextMethod;