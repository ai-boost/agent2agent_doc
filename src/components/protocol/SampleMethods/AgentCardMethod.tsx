import React from 'react';
import { useTranslation } from 'react-i18next';
import CodeBlock from '../../shared/CodeBlock';

const AgentCardMethod: React.FC = () => {
  const { t } = useTranslation('protocol');
  
  const agentCardCode = `{
  "name": "Google Maps Agent",
  "description": "Plan routes, remember places, and generate directions",
  "url": "https://maps-agent.google.com",
  "provider": {
    "organization": "Google",
    "url": "https://google.com"
  },
  "version": "1.0.0",
  "authentication": {
    "schemes": "OAuth2"
  },
  "defaultInputModes": ["text/plain"],
  "defaultOutputModes": ["text/plain", "application/html"],
  "capabilities": {
    "streaming": true,
    "pushNotifications": false
  },
  "skills": [
    {
      "id": "route-planner",
      "name": "Route planning",
      "description": "Helps plan routing between two locations",
      "tags": ["maps", "routing", "navigation"],
      "examples": [
        "plan my route from Sunnyvale to Mountain View",
        "what's the commute time from Sunnyvale to San Francisco at 9AM",
        "create turn by turn directions from Sunnyvale to Mountain View"
      ],
      // can return a video of the route
      "outputModes": ["application/html", "video/mp4"]
    },
    {
      "id": "custom-map",
      "name": "My Map",
      "description": "Manage a custom map with your own saved places",
      "tags": ["custom-map", "saved-places"],
      "examples": [
        "show me my favorite restaurants on the map",
        "create a visual of all places I've visited in the past year"
      ],
      "outputModes": ["application/html"]
    }
  ]
}`;

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-3" id="agent-card-method">
        {t('sampleMethods.agentCard.title')}
      </h3>
      <p className="text-gray-700 mb-4">
        The Agent Card is a JSON document that describes an agent's capabilities, skills, and authentication requirements.
        This is typically hosted at a well-known URL and is used by clients to discover an agent's capabilities.
      </p>
      
      <CodeBlock code={agentCardCode} language="json" />
    </div>
  );
};

export default AgentCardMethod;