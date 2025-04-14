import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const PartSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const partCode = `interface TextPart {
  type: "text";
  text: string;
}
interface FilePart {
  type: "file";
  file: {
    name?: string;
    mimeType?: string;
    // oneof {
    bytes?: string; //base64 encoded content
    uri?: string;
    //}
  };
}
interface DataPart {
  type: "data";
  data: Record<string, any>;
}
type Part = (TextPart | FilePart | DataPart) & {
  metadata: Record<string, any>;
};`;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2" id="part">
        {t('coreObjects.part.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('coreObjects.part.content')}
      </p>
      
      <CodeBlock code={partCode} language="typescript" />
    </div>
  );
};

export default PartSection;