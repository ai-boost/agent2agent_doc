import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const StreamingMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const requestCode = `{
  "method":"tasks/sendSubscribe",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "sessionId": "c295ea44-7543-4f78-b524-7a38915ad6e4",
    "message": {
      "role":"user",
      "parts": [{
        "type":"text",
        "text": "write a long paper describing the attached pictures"
      },{
        "type":"file",
        "file": {
           "mimeType": "image/png",
           "data":"<base64-encoded-content>"
        }
      }]
    },
    "metadata": {}
  }
}`;

  const responseCode = `data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "status": {
      "state": "working",
      "timestamp":"2025-04-02T16:59:25.331844"
    },
    "final": false
  }
}

data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,    
    "artifact": [
      "parts": [
        {"type":"text", "text": "<section 1...>"}
      ],
      "index": 0,
      "append": false,      
      "lastChunk": false
    ]
  }
}
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,  
    "artifact": [
      "parts": [
        {"type":"text", "text": "<section 2...>"}
      ],
      "index": 0,
      "append": true,      
      "lastChunk": false
    ]
  }
}
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,    
    "artifact": [
      "parts": [
        {"type":"text", "text": "<section 3...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk": true
    ]
  }
}

data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "status": {
      "state": "completed",
      "timestamp":"2025-04-02T16:59:35.331844"
    },
    "final": true
  }
}`;

  const resubscribeRequestCode = `{
  "method":"tasks/resubscribe",
  "params": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "metadata": {}
  }
}`;

  const resubscribeResponseCode = `data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "artifact":[
      "parts": [
        {"type":"text", "text": "<section 2...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk":false
    ]
  }
}
data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": "de38c76d-d54c-436c-8b9f-4c2703648d64",
    "artifact":[
      "parts": [
        {"type":"text", "text": "<section 3...>"}
      ],
      "index": 0,
      "append": true,
      "lastChunk": true
    ]   
  }
}

data: {
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "id": 1,
    "status": {
      "state": "completed",
      "timestamp":"2025-04-02T16:59:35.331844"
    },
    "final": true
  }
}`;

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="streaming-support">
        {t('sampleMethods.streaming.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.streaming.content')}
      </p>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Request</h4>
        <CodeBlock code={requestCode} language="json" />
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Response Stream</h4>
        <CodeBlock code={responseCode} language="json" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="resubscribe-task">
        {t('sampleMethods.streaming.resubscribe.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.streaming.resubscribe.content')}
      </p>
      
      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-800 mb-2">Resubscribe Request</h4>
        <CodeBlock code={resubscribeRequestCode} language="json" />
      </div>
      
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">Resubscribe Response</h4>
        <CodeBlock code={resubscribeResponseCode} language="json" />
      </div>
    </div>
  );
};

export default StreamingMethod;