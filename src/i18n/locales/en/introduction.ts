export default {
  "title": "Introduction to A2A",
  "unlockCollaborative": {
    "title": "Unlock Collaborative, agent to agent scenarios with a new open protocol",
    "seamlessCollaboration": "Seamless Agent Collaboration",
    "seamlessCollaborationDesc": "Introduces a standard protocol for autonomous, opaque agents built on different frameworks and by various vendors to communicate and collaborate effectively with each other and with users, addressing the current lack of agent interoperability.",
    "enterpriseIntegration": "Simplifies Enterprise Agent Integration",
    "enterpriseIntegrationDesc": "Provides a straightforward way to integrate intelligent agents into existing enterprise applications, allowing businesses to leverage agent capabilities across their technology landscape.",
    "enterpriseRequirements": "Supports Key Enterprise Requirements",
    "enterpriseRequirementsDesc": "Offers core functionalities essential for secure, enterprise-grade agent ecosystems, including capability discovery, user experience negotiation, task and state management, and secure collaboration."
  },
  "openStandards": {
    "title": "Open standards for connecting Agents",
    "mcp": {
      "title": "MCP (Model Context Protocol) for tools and resources",
      "point1": "Connect agents to tools, APIs, and resources with structured inputs/outputs.",
      "point2": "Google ADK supports MCP tools. Enabling wide range of MCP servers to be used with agents."
    },
    "a2a": {
      "title": "A2A (Agent2Agent Protocol) for agent-agent collaboration",
      "point1": "Dynamic, multimodal communication between different agents without sharing memory, resources, and tools",
      "point2": "Open standard driven by community.",
      "point3": "Samples available using Google ADK, LangGraph, Crew.AI"
    }
  },
  "feedback": {
    "title": "Feedback and Changes",
    "workInProgress": "A2A is a work in progress and is expected to change based on community feedback. This repo contains the initial specification, documentation, and sample code. We will continue to update this repo with more features, more examples, specs, and libraries as they become available. When the spec and samples can graduate to a production quality SDK, we will declare version 1.0 and maintain stable releases.",
    "blogPost": "To understand A2A design principles and external partners supporting A2A, public blog post",
    "contribute": "Interested to contribute and know more about the internals of A2A protocol? Github"
  },
  "whatIsA2A": {
    "title": "What is A2A? (Briefly)",
    "description": "A2A (Agent2Agent) is an **open protocol** from Google and partners enabling different **AI agents** (from various vendors/frameworks) to **communicate securely** and **collaborate on tasks**. It aims to break down silos between isolated agent systems, allowing for more complex cross-application automation.",
    "officialWebsite": "Official Website:",
    "officialGitHub": "Official GitHub:"
  },
  "keyPrinciples": {
    "title": "Key Principles",
    "simple": "**Simple:** Uses existing standards (HTTP, JSON-RPC, SSE).",
    "enterpriseReady": "**Enterprise Ready:** Focuses on Auth, Security, Privacy, Monitoring.",
    "asyncFirst": "**Async First:** Handles long-running tasks & human-in-the-loop.",
    "modalityAgnostic": "**Modality Agnostic:** Supports Text, Files, Forms, Streams, etc.",
    "opaqueExecution": "**Opaque Execution:** Agents interact without sharing internal logic/tools."
  },
  "howItWorks": {
    "title": "How Does A2A Work? (High Level)",
    "discovery": "**Discovery:** Agents publish an `Agent Card` (JSON) describing capabilities, endpoint, and auth needs.",
    "communication": "**Communication:** A `Client` agent sends a `Task` request (containing a `Message` with `Parts`) to a `Remote Agent (Server)` using HTTP/JSON-RPC 2.0.",
    "execution": "**Execution & Response:** The Server processes the task, updating its `status`. It responds with the final status and any generated `Artifacts` (results, also containing `Parts`).",
    "updates": "**Updates:** For long tasks, the Server can optionally stream `TaskStatusUpdateEvent` or `TaskArtifactUpdateEvent` via Server-Sent Events (SSE) or use Push Notifications.",
    "details": "For details, see the [Official Technical Documentation](https://google.github.io/A2A/#/documentation)."
  }
};