import React, { useEffect, useRef } from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add IDs to all headings for linking from the table of contents
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3');
      headings.forEach((heading, index) => {
        if (!heading.id) {
          // Create ID from heading text
          const idText = heading.textContent?.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-') || `heading-${index}`;
          heading.id = idText;
        }
      });
    }
  }, [content]);

  // More robust markdown renderer with heading IDs
  const renderMarkdown = (text: string) => {
    // Convert heading level 2 (## Heading)
    text = text.replace(/## (.*?)(?:\n|$)/g, '<h2 id="$1">$1</h2>');
    
    // Convert heading level 3 (### Heading)
    text = text.replace(/### (.*?)(?:\n|$)/g, '<h3 id="$1">$1</h3>');
    
    // Convert bold text (**text**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert italic text (*text*)
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert inline code (`text`)
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Convert links
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
    
    // Convert paragraphs (simple)
    const paragraphs = text.split('\n\n');
    return paragraphs.map((p, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: p }} className="mb-4" />
    ));
  };

  return (
    <div className="markdown-content" ref={contentRef}>
      {renderMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;