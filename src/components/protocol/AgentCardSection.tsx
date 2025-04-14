import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../shared/CodeBlock';

const AgentCardSection: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const agentCardCode = `// An AgentCard conveys key information:
// - Overall details (version, name, description, uses)
// - Skills: A set of capabilities the agent can perform
// - Default modalities/content types supported by the agent.
// - Authentication requirements
interface AgentCard {
  // Human readable name of the agent.
  // (e.g. "Recipe Agent")
  name: string;
  // A human-readable description of the agent. Used to assist users and
  // other agents in understanding what the agent can do.
  // (e.g. "Agent that helps users with recipes and cooking.")
  description: string;
  // A URL to the address the agent is hosted at.
  url: string;
  // The service provider of the agent
  provider?: {
    organization: string;
    url: string;
  };
  // The version of the agent - format is up to the provider. (e.g. "1.0.0")
  version: string;
  // A URL to documentation for the agent.
  documentationUrl?: string;
  // Optional capabilities supported by the agent.
  capabilities: {
    streaming?: boolean; // true if the agent supports SSE
    pushNotifications?: boolean; // true if the agent can notify updates to client
    stateTransitionHistory?: boolean; //true if the agent exposes status change history for tasks
  };
  // Authentication requirements for the agent.
  // Intended to match OpenAPI authentication structure.
  authentication: {
    schemes: string[]; // e.g. Basic, Bearer
    credentials?: string; //credentials a client should use for private cards
  };
  // The set of interaction modes that the agent
  // supports across all skills. This can be overridden per-skill.
  defaultInputModes: string[]; // supported mime types for input
  defaultOutputModes: string[]; // supported mime types for output
  // Skills are a unit of capability that an agent can perform.
  skills: {
    id: string; // unique identifier for the agent's skill
    name: string; //human readable name of the skill
    // description of the skill - will be used by the client or a human
    // as a hint to understand what the skill does.
    description: string;
    // Set of tagwords describing classes of capabilities for this specific
    // skill (e.g. "cooking", "customer support", "billing")
    tags: string[];
    // The set of example scenarios that the skill can perform.
    // Will be used by the client as a hint to understand how the skill can be
    // used. (e.g. "I need a recipe for bread")
    examples?: string[]; // example prompts for tasks
    // The set of interaction modes that the skill supports
    // (if different than the default)
    inputModes?: string[]; // supported mime types for input
    outputModes?: string[]; // supported mime types for output
  }[];
}`;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" id="agent-card">
        {t('agentCard.title')}
      </h2>
      <p className="text-gray-700 mb-4">
        {t('agentCard.content')}
      </p>

      {/* Discovery */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" id="discovery">
          {t('agentCard.discovery.title')}
        </h3>
        <p className="text-gray-700">
          {t('agentCard.discovery.content')} <a href="https://google.github.io/A2A/#/topics/agent_discovery?id=discovering-agent-cards" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">this document</a>.
        </p>
      </div>

      {/* Representation */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" id="representation">
          {t('agentCard.representation.title')}
        </h3>
        <p className="text-gray-700 mb-2">
          {t('agentCard.representation.content')}
        </p>
        <CodeBlock code={agentCardCode} language="typescript" />
      </div>
    </section>
  );
};

export default AgentCardSection;