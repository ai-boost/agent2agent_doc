import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript' }) => {
  const customStyle = {
    borderRadius: '0.375rem',
    padding: '1rem',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    border: '1px solid #e5e7eb',
  };

  return (
    <div className="overflow-auto rounded-md shadow-sm">
      <SyntaxHighlighter 
        language={language} 
        style={oneLight}
        customStyle={customStyle}
        showLineNumbers={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;