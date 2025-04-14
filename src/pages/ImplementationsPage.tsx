import React from 'react';
import { useTranslation } from 'react-i18next';

const ImplementationsPage: React.FC = () => {
  const { t } = useTranslation('implementations');
  
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8" id="implementations-title">
          {t('title')}
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" id="official-samples">
            {t('officialSamples.title')}
          </h2>
          <p className="text-gray-500 mb-6">
            {t('officialSamples.description')}
          </p>
          
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('officialSamples.table.headers.language')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('officialSamples.table.headers.type')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('officialSamples.table.headers.framework')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('officialSamples.table.headers.description')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {t('officialSamples.table.rows', { returnObjects: true }).map((row: any, index: number) => {
                        // Define the URLs for each row
                        const urls = [
                          "https://github.com/google/A2A/tree/main/samples/python/common",
                          "https://github.com/google/A2A/tree/main/samples/python/hosts/cli",
                          "https://github.com/google/A2A/tree/main/samples/python/hosts/multiagent",
                          "https://github.com/google/A2A/tree/main/samples/js/src/server",
                          "https://github.com/google/A2A/tree/main/samples/js/src/client",
                          "https://github.com/google/A2A/blob/main/samples/js/src/cli.ts"
                        ];
                        
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {row.language}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.framework}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                              <a 
                                href={urls[index]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-blue-800 hover:underline"
                              >
                                View Code
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" id="framework-integrations">
            {t('frameworkIntegrations.title')}
          </h2>
          <p className="text-gray-500 mb-6">
            {t('frameworkIntegrations.description')}
          </p>
          
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('frameworkIntegrations.table.headers.language')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('frameworkIntegrations.table.headers.framework')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('frameworkIntegrations.table.headers.description')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t('frameworkIntegrations.table.headers.features')}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {t('frameworkIntegrations.table.rows', { returnObjects: true }).map((row: any, index: number) => {
                        // Define the URLs for each row
                        const urls = [
                          "https://github.com/google/A2A/tree/main/samples/python/agents/langgraph",
                          "https://github.com/google/A2A/tree/main/samples/python/agents/crewai",
                          "https://github.com/google/A2A/tree/main/samples/python/agents/google_adk",
                          "https://github.com/google/A2A/tree/main/samples/js/src/agents"
                        ];
                        
                        return (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {row.language}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.framework}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {row.features}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                              <a 
                                href={urls[index]} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-blue-800 hover:underline"
                              >
                                View Code
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" id="community-implementations">
            {t('communityImplementations.title')}
          </h2>
          <p className="text-gray-500 italic">
            {t('communityImplementations.comingSoon')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ImplementationsPage;