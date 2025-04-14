import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const ErrorHandlingMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const errorMessageCode = `interface ErrorMessage {
  code: number;
  message: string;
  data?: any;
}`;

  return (
    <div className="mb-8 border-t border-gray-200 pt-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="error-handling">
        {t('sampleMethods.errorHandling.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        {t('sampleMethods.errorHandling.content')}
      </p>
      
      <div className="mb-6">
        <CodeBlock code={errorMessageCode} language="typescript" />
      </div>
      
      <div>
        <h4 className="text-lg font-medium text-gray-800 mb-3">
          {t('sampleMethods.errorHandling.errorCodes')}
        </h4>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 rounded-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Error Code
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Message
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32700</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">JSON parse error</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Invalid JSON was sent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32600</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Invalid Request</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Request payload validation error</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32601</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Method not found</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Not a valid method</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32602</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Invalid params</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Invalid method parameters</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32603</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Internal error</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Internal JSON-RPC error</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32000 to -32099</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Server error</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Reserved for implementation specific error codes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32001</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Task not found</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Task not found with the provided id</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32002</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Task cannot be canceled</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Task cannot be canceled by the remote agent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32003</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Push notifications not supported</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Push Notification is not supported by the agent</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32004</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Unsupported operation</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Operation is not supported</td>
              </tr>
              <tr>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r">-32005</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r">Incompatible content types</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">Incompatible content types between client and an agent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandlingMethod;