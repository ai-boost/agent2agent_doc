import React from 'react';
import { useTranslation } from 'react-i18next';

const MethodsOverviewSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <div>
      <p className="text-gray-700 mb-8">
        For full details on sample methods and JSON responses, please refer to the 
        <a href="https://google.github.io/A2A/#/documentation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">
          official A2A documentation
        </a>
        which contains complete code examples for:
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=agent-card" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.agentCard.title')}
          </a>
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=send-a-task" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.sendTask.title')}
          </a> - {t('sampleMethods.sendTask.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=get-a-task" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.getTask.title')}
          </a> - {t('sampleMethods.getTask.content1')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=cancel-a-task" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.cancelTask.title')}
          </a> - {t('sampleMethods.cancelTask.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=set-task-push-notifications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.setPushNotifications.title')}
          </a> - {t('sampleMethods.setPushNotifications.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=get-task-push-notifications" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.getPushNotifications.title')}
          </a> - {t('sampleMethods.getPushNotifications.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=multi-turn-conversations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.multiTurn.title')}
          </a> - {t('sampleMethods.multiTurn.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=streaming-support" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.streaming.title')}
          </a> - {t('sampleMethods.streaming.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=non-textual-media" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.nonTextMedia.title')}
          </a> - {t('sampleMethods.nonTextMedia.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=structured-output" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.structuredOutput.title')}
          </a> - {t('sampleMethods.structuredOutput.content')}
        </li>
        <li>
          <a href="https://google.github.io/A2A/#/documentation?id=error-handling" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {t('sampleMethods.errorHandling.title')}
          </a> - {t('sampleMethods.errorHandling.content')}
        </li>
      </ul>
    </div>
  );
};

export default MethodsOverviewSection;