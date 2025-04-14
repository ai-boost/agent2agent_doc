export default {
  "title": "Agent Discovery",
  "description": "How to discover and interact with A2A agents",
  "introduction": {
    "content": "A2A's AgentCard standardizes the format of the data shared during discovery. However there are unlimited ways to discover these agent cards. We anticipate this being an open topic for discussion and look forward to ideas from the community.",
    "currentThinking": "Here is our current thinking."
  },
  "openDiscovery": {
    "title": "Open Discovery",
    "content": "We recommend enterprises host their agent cards at a well-known path. Specifically: <code>https://DOMAIN/.well-known/agent.json</code>. Clients will use DNS to resolve a known or found domain, send a simple GET request to the path, and receive the agent card.",
    "webCrawlers": "This will enable web-crawlers and applications to easily discover agents for known or configured domains. This effectively reduces the discovery process to \"find a domain\"."
  },
  "curatedDiscovery": {
    "title": "Curated Discovery (Registry-Based)",
    "content": "We anticipate enterprise applications making curated registries of agents available through a catalog interface. This opens up more enterprise scenarios such as company-specific or team-specific agent registries that are curated by an administrator.",
    "consideration": "We are considering adding Registry support to the protocol - please drop us a note with your opinion and where you see this being valuable as a standard"
  },
  "privateDiscovery": {
    "title": "Private Discovery (API-Based)",
    "content": "There will undoubtably be private \"agent stores\" or proprietary agents where cards are exchanged behind custom APIs.",
    "consideration": "We are not considering private discovery APIs as an A2A concern - please drop us a note with your opinion and where you see this being valuable as a standard"
  },
  "securingAgentCards": {
    "title": "Securing Agent Cards",
    "content": "Agent cards may contain sensitive information. Implementors may decide to secure their agent cards behind controls that require authentication and authorization. For example, within an organization, even an open discovery at a well-known path could be guarded by mTLS and restricted to specific clients. Registries and Private Discovery APIs should require authentication and return different artifacts for different identities.",
    "recommendation": "Note that implementors may include credential information (such as API Keys) in their Agent Cards. It is recommended that this information is NEVER available without Authentication."
  }
};