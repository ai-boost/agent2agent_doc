import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const MessageSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const messageCode = `interface Message {
  role: "user" | "agent";
  parts: Part[];
  metadata?: Record<string, any>;
}`;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2" id="message">
        {t('coreObjects.message.title')}
      </h3>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.message.content1')}
      </p>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.message.content2')}
      </p>
      <p className="text-gray-700 mb-4">
        {t('coreObjects.message.content3')}
      </p>
      
      <CodeBlock code={messageCode} language="typescript" />
    </div>
  );
};

export default MessageSection;