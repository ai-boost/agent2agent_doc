import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef }) => {
  const { t, i18n } = useTranslation('common');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (!contentRef.current) return;

    // Function to extract headings from the content
    const extractHeadings = () => {
      const contentElement = contentRef.current;
      if (!contentElement) return [];

      // Select all headings, including those in markdown content
      const headingElements = contentElement.querySelectorAll('h2, h3, .markdown-content h2, .markdown-content h3');
      const extractedHeadings: Heading[] = [];

      headingElements.forEach((heading) => {
        const level = parseInt(heading.tagName.substring(1));
        const id = heading.id || `heading-${extractedHeadings.length}`;
        
        // If no id exists, add one to make it linkable
        if (!heading.id) {
          heading.id = id;
        }

        const text = heading.textContent || '';
        if (text.trim() !== '') {
          extractedHeadings.push({
            id,
            text,
            level
          });
        }
      });

      return extractedHeadings;
    };

    const handleContentChange = () => {
      // Use a mutation observer to detect changes to the DOM
      const observer = new MutationObserver(() => {
        setHeadings(extractHeadings());
      });

      // Start observing the content element
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true,
        characterData: true
      });

      // Initial extraction
      setHeadings(extractHeadings());

      return () => observer.disconnect();
    };

    // Extract headings after content load and on language change
    const timeoutId = setTimeout(() => {
      handleContentChange();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [contentRef.current, i18n.language]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element && contentRef.current) {
      // Get the scrollable container's bounding rectangle
      const containerRect = contentRef.current.getBoundingClientRect();
      
      // Get the element's bounding rectangle
      const elementRect = element.getBoundingClientRect();
      
      // Calculate the relative position of the element to the container
      const relativePosition = elementRect.top - containerRect.top;
      
      // Add the current scroll position and adjust for header (padding)
      const headerOffset = 100; // Adjust based on your layout
      const scrollPosition = contentRef.current.scrollTop + relativePosition - headerOffset;
      
      // Scroll the container to the calculated position
      contentRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="hidden lg:block w-64 ml-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-4 border-l border-gray-200">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
          {t('onThisPage')}
        </h3>
        <nav className="space-y-1">
          {headings.map((heading, index) => (
            <button
              key={`${heading.id}-${index}`}
              onClick={() => scrollToHeading(heading.id)}
              className={`block text-sm transition-colors w-full text-left
                ${heading.level === 2 
                  ? 'text-gray-700 font-medium pl-0' 
                  : 'text-gray-600 pl-4'}
                hover:text-blue-600 focus:outline-none py-1`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;