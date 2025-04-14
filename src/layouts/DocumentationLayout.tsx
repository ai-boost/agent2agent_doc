import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Sidebar';
import TableOfContents from '../components/TableOfContents';

const DocumentationLayout: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { i18n } = useTranslation();

  // Reset scroll position when route or language changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [location.pathname, i18n.language]);

  return (
    <div className="flex flex-1 h-[calc(100vh-4rem)]">
      {/* Left sidebar - fixed */}
      <div className="sticky top-0 h-[calc(100vh-4rem)] self-start">
        <Sidebar />
      </div>
      
      {/* Middle scrollable content */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-4rem)] bg-white" ref={contentRef}>
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex">
            <div className="flex-grow pr-0 lg:pr-8">
              <Outlet />
            </div>
            
            {/* Right table of contents - fixed */}
            <div className="sticky top-0 self-start hidden lg:block">
              <TableOfContents contentRef={contentRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;