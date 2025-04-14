import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const ArtifactSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const artifactCode = `interface Artifact {
  name?: string;
  description?: string;
  parts: Part[];
  metadata?: Record<string, any>;
  index: number;
  append?: boolean;
  lastChunk?: boolean;
}`;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2" id="artifact">
        {t('coreObjects.artifact.title')}
      </h3>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.artifact.content1')}
      </p>
      <p className="text-gray-700 mb-4">
        {t('coreObjects.artifact.content2')}
      </p>
      
      <CodeBlock code={artifactCode} language="typescript" />
    </div>
  );
};

export default ArtifactSection;