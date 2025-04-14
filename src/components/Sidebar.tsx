import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

// Interface for menu items
interface MenuItem {
  title: string;
  path: string;
  children?: MenuItem[];
  expanded?: boolean;
}

const Sidebar: React.FC = () => {
  const { t } = useTranslation(['common', 'protocol', 'keyTopics']);
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'protocol': location.pathname.includes('/docs/protocol'),
    'keyTopics': location.pathname.includes('/docs/key-topics')
  });
  
  // Menu items
  const menuItems: MenuItem[] = [
    { title: t('common:sections.introduction'), path: '/docs/introduction' },
    { title: t('common:sections.gettingStarted'), path: '/docs/getting-started' },
    { 
      title: t('common:sections.protocol'), 
      path: '/docs/protocol/overview', // Changed to directly link to overview
      children: [
        { title: t('protocol:overview.title'), path: '/docs/protocol/overview' },
        { title: t('protocol:keyPrinciples.title'), path: '/docs/protocol/key-principles' },
        { title: t('protocol:agentCard.title'), path: '/docs/protocol/agent-card' },
        { title: t('protocol:communication.title'), path: '/docs/protocol/communication' },
        { title: t('protocol:coreObjects.title'), path: '/docs/protocol/core-objects' },
        { title: t('protocol:sampleMethods.title'), path: '/docs/protocol/sample-methods' },
        { title: t('protocol:feedbackAndChanges.title'), path: '/docs/protocol/feedback' }
      ]
    },
    {
      title: t('common:sections.keyTopics'),
      path: '/docs/key-topics',
      children: [
        { title: t('keyTopics:a2aAndMcp.title'), path: '/docs/key-topics/a2a-and-mcp' },
        { title: t('keyTopics:agentDiscovery.title'), path: '/docs/key-topics/agent-discovery' },
        { title: t('keyTopics:enterpriseReady.title'), path: '/docs/key-topics/enterprise-ready' },
        { title: t('keyTopics:pushNotifications.title'), path: '/docs/key-topics/push-notifications' }
      ]
    },
    { title: t('common:sections.resources'), path: '/docs/resources' },
    { title: t('common:sections.implementations'), path: '/docs/implementations' },
  ];

  // Update expanded sections when location changes
  useEffect(() => {
    if (location.pathname.includes('/docs/protocol')) {
      setExpandedSections(prev => ({
        ...prev,
        protocol: true
      }));
    }
    if (location.pathname.includes('/docs/key-topics')) {
      setExpandedSections(prev => ({
        ...prev,
        keyTopics: true
      }));
    }
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections({
      ...expandedSections,
      [sectionTitle]: !expandedSections[sectionTitle]
    });
  };

  if (collapsed) {
    return (
      <div className="w-6 h-full border-r border-gray-100 flex items-start justify-center pt-6">
        <button 
          onClick={() => setCollapsed(false)} 
          className="bg-white border border-gray-200 rounded-md p-1 shadow-sm hover:bg-gray-50"
          aria-label="Expand sidebar"
        >
          <ChevronRight className="h-4 w-4 text-gray-500" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-64 border-r border-gray-100 bg-white h-full flex flex-col">
      {/* Sidebar toggle button */}
      <div className="absolute right-0 top-6 flex justify-end pr-2 z-10">
        <button 
          onClick={() => setCollapsed(true)} 
          className="bg-white border border-gray-200 rounded-md p-1 shadow-sm hover:bg-gray-50"
          aria-label="Collapse sidebar"
        >
          <ChevronLeft className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      <div className="py-6 px-4 flex-1 overflow-y-auto">
        <h2 className="text-lg font-medium text-gray-900 mb-6">{t('common:tableOfContents')}</h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div key={item.path}>
              {item.children ? (
                <div className="mb-2">
                  <div 
                    className={`flex items-center justify-between px-3 py-2 text-sm font-medium border-l-4 rounded-r-md transition-colors cursor-pointer ${
                      (item.title === t('common:sections.protocol') && location.pathname.includes('/docs/protocol')) ||
                      (item.title === t('common:sections.keyTopics') && location.pathname.includes('/docs/key-topics'))
                        ? 'border-blue-500 text-blue-700 bg-blue-50'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => toggleSection(item.title)}
                  >
                    <NavLink
                      to={item.path}
                      className={`flex-grow ${
                        (item.title === t('common:sections.protocol') && location.pathname.includes('/docs/protocol')) ||
                        (item.title === t('common:sections.keyTopics') && location.pathname.includes('/docs/key-topics'))
                          ? 'text-blue-700' 
                          : 'text-gray-600'
                      }`}
                    >
                      {item.title}
                    </NavLink>
                    {expandedSections[item.title] ? (
                      <ChevronUp className="h-4 w-4 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  
                  {expandedSections[item.title] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={`${
                            isActive(child.path)
                              ? 'bg-blue-50 text-blue-700 border-blue-500'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent'
                          } flex items-center px-3 py-2 text-sm font-medium border-l-4 rounded-r-md transition-colors`}
                        >
                          {child.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-700 border-blue-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent'
                  } flex items-center px-3 py-2 text-sm font-medium border-l-4 rounded-r-md transition-colors`}
                >
                  {item.title}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;