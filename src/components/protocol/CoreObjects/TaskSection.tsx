import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const TaskSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const taskCode = `interface Task {
  id: string; // unique identifier for the task
  sessionId: string; // client-generated id for the session holding the task.
  status: TaskStatus; // current status of the task
  history?: Message[]; 
  artifacts?: Artifact[]; // collection of artifacts created by the agent.
  metadata?: Record<string, any>; // extension metadata
}
// TaskState and accompanying message.
interface TaskStatus {
  state: TaskState;
  message?: Message; //additional status updates for client
  timestamp?: string; // ISO datetime value
}
// sent by server during sendSubscribe or subscribe requests
interface TaskStatusUpdateEvent {
  id: string;
  status: TaskStatus;
  final: boolean; //indicates the end of the event stream
  metadata?: Record<string, any>;
}
// sent by server during sendSubscribe or subscribe requests
interface TaskArtifactUpdateEvent {
  id: string;
  artifact: Artifact;
  metadata?: Record<string, any>;
}
// Sent by the client to the agent to create, continue, or restart a task.
interface TaskSendParams {
  id: string;
  sessionId?: string; //server creates a new sessionId for new tasks if not set
  message: Message;
  historyLength?: number; //number of recent messages to be retrieved
  // where the server should send notifications when disconnected.
  pushNotification?: PushNotificationConfig;
  metadata?: Record<string, any>; // extension metadata
}
type TaskState =
  | "submitted"
  | "working"
  | "input-required"
  | "completed" 
  | "canceled"
  | "failed"
  | "unknown";`;

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2" id="task">
        {t('coreObjects.task.title')}
      </h3>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.task.content1')}
      </p>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.task.content2')}
      </p>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.task.content3')}
      </p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
        {t('coreObjects.task.items', { returnObjects: true }).map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="text-gray-700 mb-2">
        {t('coreObjects.task.content4')}
      </p>
      <p className="text-gray-700 mb-4">
        {t('coreObjects.task.content5')}
      </p>
      
      <CodeBlock code={taskCode} language="typescript" />
    </div>
  );
};

export default TaskSection;