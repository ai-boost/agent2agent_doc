import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Key, User, Server, Activity, ExternalLink } from 'lucide-react';

const EnterpriseReadyPage: React.FC = () => {
  const { t } = useTranslation(['keyTopics', 'enterpriseReady']);
  
  return (
    <div className="max-w-full">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {t('enterpriseReady:title')}
      </h1>
      
      <p className="text-xl text-gray-500 mb-8">
        {t('enterpriseReady:description')}
      </p>
      
      {/* Introduction Section */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
        <p className="text-gray-700 mb-2">
          {t('enterpriseReady:introduction.content')}
        </p>
        <p className="text-gray-700 mb-2">
          {t('enterpriseReady:introduction.modeling')}
        </p>
        <p className="text-gray-700">
          {t('enterpriseReady:introduction.keepingOutside')}
        </p>
      </div>

      {/* Transport Level Security */}
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <Lock className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900" id="transport-security">
            {t('enterpriseReady:transportSecurity.title')}
          </h2>
        </div>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:transportSecurity.content')}
        </p>
      </section>

      {/* Server Identity */}
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <Server className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900" id="server-identity">
            {t('enterpriseReady:serverIdentity.title')}
          </h2>
        </div>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:serverIdentity.content')}
        </p>
      </section>

      {/* Client and User Identity */}
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <User className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900" id="client-identity">
            {t('enterpriseReady:clientIdentity.title')}
          </h2>
        </div>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:clientIdentity.content')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:clientIdentity.recommendation')}
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-4 rounded">
          <p className="text-gray-700 italic">
            {t('enterpriseReady:clientIdentity.multiIdentityNote')}
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:clientIdentity.currentRecommendation')}
        </p>
      </section>

      {/* Authenticating Clients */}
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <Key className="h-6 w-6 text-yellow-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900" id="authenticating-clients">
            {t('enterpriseReady:authenticatingClients.title')}
          </h2>
        </div>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:authenticatingClients.publishProtocol')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:authenticatingClients.externalProcess')}
        </p>
        <p className="text-gray-700 mb-4">
          {t('enterpriseReady:authenticatingClients.authentication')}
        </p>
      </section>

      {/* Authorization and Data Privacy */}
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <Shield className="h-6 w-6 text-red-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900" id="authorization">
            {t('enterpriseReady:authorization.title')}
          </h2>
        </div>
        <p className="text-gray-700 mb-6">
          {t('enterpriseReady:authorization.content')}
        </p>

        <div className="ml-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t('enterpriseReady:authorization.skills.title')}
          </h3>
          <p className="text-gray-700">
            {t('enterpriseReady:authorization.skills.content')}
          </p>
        </div>

        <div className="ml-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t('enterpriseReady:authorization.tools.title')}
          </h3>
          <p className="text-gray-700">
            {t('enterpriseReady:authorization.tools.content')}
          </p>
        </div>
      </section>

      {/* Tracing and Observability */}
      <section className="mb-8">
        <div className="flex items-center mb-2">
          <Activity className="h-6 w-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900" id="tracing">
            {t('enterpriseReady:tracing.title')}
          </h2>
        </div>
        <p className="text-gray-700">
          {t('enterpriseReady:tracing.content')}
        </p>
      </section>

      {/* References */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Related Documents</h3>
        <ul className="space-y-2">
          <li>
            <a 
              href="https://google.github.io/A2A/#/topics/enterprise_ready?id=enterprise-readiness" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Official A2A Enterprise Readiness Documentation
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
          <li>
            <a 
              href="https://google.github.io/A2A/#/documentation?id=agent-card" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Agent Card Authentication Specification
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EnterpriseReadyPage;