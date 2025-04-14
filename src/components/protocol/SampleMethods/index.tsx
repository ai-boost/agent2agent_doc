import React from 'react';
import { useTranslation } from 'react-i18next';
import AgentCardMethod from './AgentCardMethod';
import SendTaskMethod from './SendTaskMethod';
import GetTaskMethod from './GetTaskMethod';
import CancelTaskMethod from './CancelTaskMethod';
import PushNotificationsMethod from './PushNotificationsMethod';
import MultiTurnMethod from './MultiTurnMethod';
import StreamingMethod from './StreamingMethod';
import NonTextMethod from './NonTextMethod';
import StructuredOutputMethod from './StructuredOutputMethod';
import ErrorHandlingMethod from './ErrorHandlingMethod';

const SampleMethodsSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="sample-methods">
        {t('sampleMethods.title')}
      </h2>
      <p className="text-gray-700 mb-6">
        The following examples demonstrate how to use the A2A protocol's JSON-RPC methods. 
        These samples include both request and response formats for common operations.
      </p>
      
      <AgentCardMethod />
      <SendTaskMethod />
      <GetTaskMethod />
      <CancelTaskMethod />
      <PushNotificationsMethod />
      <MultiTurnMethod />
      <StreamingMethod />
      <NonTextMethod />
      <StructuredOutputMethod />
      <ErrorHandlingMethod />
    </section>
  );
};

export default SampleMethodsSection;