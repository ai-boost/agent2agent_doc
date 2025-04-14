export default {
  "title": "Agent Card",
  "content": "Remote Agents that support A2A are required to publish an Agent Card in JSON format describing the agent's capabilities/skills and authentication mechanism. Clients use the Agent Card information to identify the best agent that can perform a task and leverage A2A to communicate with that remote agent.",
  "discovery": {
    "title": "Discovery",
    "content": "We recommend agents host their Agent Card at https://<base url>/.well-known/agent.json. This is compatible with a DNS approach where the client finds the server IP via DNS and sends an HTTP GET to retrieve the agent card. We also anticipate that systems will maintain private registries (e.g. an 'Agent Catalog' or private marketplace, etc). More discussion can be found in this document."
  },
  "representation": {
    "title": "Representation",
    "content": "Following is the proposed representation of an Agent Card:"
  }
}