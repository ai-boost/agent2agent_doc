export default {
  "title": "Implementations & Libraries",
  "officialSamples": {
    "title": "Official Samples",
    "description": "These demonstrate basic A2A client/server communication.",
    "table": {
      "headers": {
        "language": "Language",
        "type": "Type",
        "framework": "Framework",
        "description": "Description"
      },
      "rows": [
        {
          "language": "🐍 Python",
          "type": "Common Library",
          "framework": "-",
          "description": "Core HTTP, JSON-RPC, SSE handling"
        },
        {
          "language": "🐍 Python",
          "type": "Host (Client)",
          "framework": "CLI",
          "description": "Command-line client example"
        },
        {
          "language": "🐍 Python",
          "type": "Host (Agent)",
          "framework": "ADK",
          "description": "Orchestrator agent delegating to A2A agents"
        },
        {
          "language": "🚀 JS/TS",
          "type": "Server Library",
          "framework": "Express",
          "description": "Core server implementation"
        },
        {
          "language": "🚀 JS/TS",
          "type": "Client Library",
          "framework": "-",
          "description": "Client implementation"
        },
        {
          "language": "🚀 JS/TS",
          "type": "Host (Client)",
          "framework": "CLI",
          "description": "Command-line client example"
        }
      ]
    }
  },
  "frameworkIntegrations": {
    "title": "Framework Integrations (Official Samples)",
    "description": "These show how agents built with specific frameworks can expose an A2A interface.",
    "table": {
      "headers": {
        "language": "Language",
        "framework": "Agent Framework",
        "description": "Agent Description",
        "features": "Key A2A Features Demonstrated"
      },
      "rows": [
        {
          "language": "🐍 Python",
          "framework": "LangGraph",
          "description": "Currency conversion",
          "features": "Tools, Streaming, Multi-turn"
        },
        {
          "language": "🐍 Python",
          "framework": "CrewAI",
          "description": "Image generation",
          "features": "Non-textual Artifacts (Files)"
        },
        {
          "language": "🐍 Python",
          "framework": "Google ADK",
          "description": "Expense reimbursement",
          "features": "Multi-turn, Forms (DataPart)"
        },
        {
          "language": "🚀 JS/TS",
          "framework": "Genkit",
          "description": "Movie info / Code generation",
          "features": "Tools, Artifacts (Files), Async"
        }
      ]
    }
  },
  "communityImplementations": {
    "title": "Community Implementations",
    "comingSoon": "Community implementations will be listed here as they become available."
  }
};