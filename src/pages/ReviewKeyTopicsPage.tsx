import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, Fingerprint, ShieldCheck, Bell } from 'lucide-react';

const ReviewKeyTopicsPage: React.FC = () => {
  const { t } = useTranslation(['keyTopics']);
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6" id="key-topics-title">
          {t('title')}
        </h1>
        
        <p className="text-xl text-gray-500 mb-12">
          {t('description')}
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* A2A and MCP */}
          <Link to="/docs/key-topics/a2a-and-mcp" className="bg-white overflow-hidden shadow-sm hover:shadow-md rounded-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {t('a2aAndMcp.title')}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('a2aAndMcp.description')}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Agent Discovery */}
          <Link to="/docs/key-topics/agent-discovery" className="bg-white overflow-hidden shadow-sm hover:shadow-md rounded-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Fingerprint className="h-8 w-8 text-indigo-500" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {t('agentDiscovery.title')}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('agentDiscovery.description')}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Enterprise Ready */}
          <Link to="/docs/key-topics/enterprise-ready" className="bg-white overflow-hidden shadow-sm hover:shadow-md rounded-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-8 w-8 text-green-500" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {t('enterpriseReady.title')}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('enterpriseReady.description')}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Push Notifications */}
          <Link to="/docs/key-topics/push-notifications" className="bg-white overflow-hidden shadow-sm hover:shadow-md rounded-lg transition-all duration-300">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Bell className="h-8 w-8 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {t('pushNotifications.title')}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('pushNotifications.description')}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewKeyTopicsPage;