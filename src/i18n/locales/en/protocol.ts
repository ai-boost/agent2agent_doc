export default {
  "title": "A2A Protocol Documentation",
  "description": "An open protocol enabling Agent-to-Agent interoperability, bridging the gap between opaque agentic systems.",
  "feedbackAndChanges": {
    "title": "Feedback and Changes",
    "content": "A2A is a work in progress and is expected to change based on community feedback. This repo contains the initial specification, documentation, and sample code. We will continue to update this repo with more features, more examples, specs, and libraries as they become available. When the spec and samples can graduate to a production quality SDK, we will declare version 1.0 and maintain stable releases."
  },
  "keyPrinciples": {
    "title": "Key Principles",
    "content": "Using A2A, agents accomplish tasks for end-users without sharing memory, thoughts, or tools. Instead the agents exchange context, status, instructions, and data in their native modalities.",
    "items": [
      "<strong>Simple</strong>: Reuse existing standards",
      "<strong>Enterprise Ready</strong>: Auth, Security, Privacy, Tracing, Monitoring",
      "<strong>Async First</strong>: (Very) Long running-tasks and human-in-the-loop",
      "<strong>Modality Agnostic</strong>: text, audio/video, forms, iframe, etc.",
      "<strong>Opaque Execution</strong>: Agents do not have to share thoughts, plans, or tools."
    ],
    "detailedDiscussions": "More Detailed Discussions:"
  },
  "overview": {
    "title": "Overview",
    "actors": {
      "title": "Actors",
      "content": "The A2A protocol has three actors:",
      "user": "<strong>User</strong><br>The end-user (human or service) that is using an agentic system to accomplish tasks.",
      "client": "<strong>Client</strong><br>The entity (service, agent, application) that is requesting an action from an opaque agent on behalf of the user.",
      "remoteAgent": "<strong>Remote Agent (Server)</strong><br>The opaque (\"blackbox\") agent which is the A2A server."
    },
    "transport": {
      "title": "Transport",
      "content1": "The protocol leverages HTTP for transport between the client and the remote agent. Depending on the capabilities of the client and the remote agent, they may leverage SSE for supporting streaming for receiving updates from the server.",
      "content2": "A2A leverages JSON-RPC 2.0 as the data exchange format for communication between a Client and a Remote Agent."
    },
    "async": {
      "title": "Async",
      "content": "A2A clients and servers can use standard request/response patterns and poll for updates. However, A2A also supports streaming updates through SSE (while connected) and receiving push notifications while disconnected."
    },
    "authentication": {
      "title": "Authentication and Authorization",
      "content1": "A2A models agents as enterprise applications (and can do so because A2A agents are opaque and do not share tools and resources). This quickly brings enterprise-readiness to agentic interop.",
      "content2": "A2A follows OpenAPI's Authentication specification for authentication. Importantly, A2A agents do not exchange identity information within the A2A protocol. Instead, they obtain materials (such as tokens) out of band and transmit materials in HTTP headers and not in A2A payloads.",
      "content3": "While A2A does not transmit identity in-band, servers do send authentication requirements in A2A payloads. At minimum, servers are expected to publish their requirements in their Agent Card. Thoughts about discovering agent cards are in this topic.",
      "content4": "Clients should use one of the servers published authentication protocols to authenticate their identity and obtain credential material. A2A servers should authenticate every request and reject or challenge requests with standard HTTP response codes (401, 403), and authentication-protocol-specific headers and bodies (such as a HTTP 401 response with a WWW-Authenticate header indicating the required authentication schema, or OIDC discovery document at a well-known path). More details discussed in Enterprise Ready.",
      "note": "Note: If an agent requires that the client/user provide additional credentials during execution of a task (for example, to use a specific tool), the agent should return a task status of Input-Required with the payload being an Authentication structure. The client should, again, obtain credential material out of band to A2A."
    }
  },
  "agentCard": {
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
  },
  "agentToAgentCommunication": {
    "title": "Agent-to-Agent Communication",
    "content": "The communication between a Client and a Remote Agent is oriented towards task completion where agents collaboratively fulfill an end-user's request. A Task object allows a Client and a Remote Agent to collaborate for completing the submitted task.",
    "content2": "A task can be completed by a remote agent immediately or it can be long-running. For long-running tasks, the client may poll the agent for fetching the latest status. Agents can also push notifications to the client via SSE (if connected) or through an external notification service."
  },
  "coreObjects": {
    "title": "Core Objects",
    "task": {
      "title": "Task",
      "content1": "A Task is a stateful entity that allows Clients and Remote Agents to achieve a specific outcome and generate results. Clients and Remote Agents exchange Messages within a Task. Remote Agents generate results as Artifacts.",
      "content2": "A Task is always created by a Client and the status is always determined by the Remote Agent. Multiple Tasks may be part of a common session (denoted by optional sessionId) if required by the client. To do so, the Client sets an optional sessionId when creating the Task.",
      "content3": "The agent may:",
      "items": [
        "fulfill the request immediately",
        "schedule work for later",
        "reject the request",
        "negotiate a different modality",
        "ask the client for more information",
        "delegate to other agents and systems"
      ],
      "content4": "Even after fulfilling the goal, the client can request more information or a change in the context of that same Task. (For example client: \"draw a picture of a rabbit\", agent: \"<picture>\", client: \"make it red\").",
      "content5": "Tasks are used to transmit Artifacts (results) and Messages (thoughts, instructions, anything else). Tasks maintain a status and an optional history of status and Messages."
    },
    "artifact": {
      "title": "Artifact",
      "content1": "Agents generate Artifacts as an end result of a Task. Artifacts are immutable, can be named, and can have multiple parts. A streaming response can append parts to existing Artifacts.",
      "content2": "A single Task can generate many Artifacts. For example, \"create a webpage\" could create separate HTML and image Artifacts."
    },
    "message": {
      "title": "Message",
      "content1": "A Message contains any content that is not an Artifact. This can include things like agent thoughts, user context, instructions, errors, status, or metadata.",
      "content2": "All content from a client comes in the form of a Message. Agents send Messages to communicate status or to provide instructions (whereas generated results are sent as Artifacts).",
      "content3": "A Message can have multiple parts to denote different pieces of content. For example, a user request could include a textual description from a user and then multiple files used as context from the client."
    },
    "part": {
      "title": "Part",
      "content": "A fully formed piece of content exchanged between a client and a remote agent as part of a Message or an Artifact. Each Part has its own content type and metadata."
    },
    "pushNotifications": {
      "title": "Push Notifications",
      "content1": "A2A supports a secure notification mechanism whereby an agent can notify a client of an update outside of a connected session via a PushNotificationService. Within and across enterprises, it is critical that the agent verifies the identity of the notification service, authenticates itself with the service, and presents an identifier that ties the notification to the executing Task.",
      "content2": "The target server of the PushNotificationService should be considered a separate service, and is not guaranteed (or even expected) to be the client directly. This PushNotificationService is responsible for authenticating and authorizing the agent and for proxying the verified notification to the appropriate endpoint (which could be anything from a pub/sub queue, to an email inbox or other service, etc).",
      "content3": "For contrived scenarios with isolated client-agent pairs (e.g. local service mesh in a contained VPC, etc.) or isolated environments without enterprise security concerns, the client may choose to simply open a port and act as its own PushNotificationService. Any enterprise implementation will likely have a centralized service that authenticates the remote agents with trusted notification credentials and can handle online/offline scenarios. (This should be thought of similarly to a mobile Push Notification Service)."
    }
  },
  "sampleMethods": {
    "title": "Sample Methods and JSON Responses",
    "agentCard": {
      "title": "Agent Card"
    },
    "sendTask": {
      "title": "Send a Task",
      "content": "Allows a client to send content to a remote agent to start a new Task, resume an interrupted Task or reopen a completed Task. A Task interrupt may be caused due to an agent requiring additional user input or a runtime error."
    },
    "getTask": {
      "title": "Get a Task",
      "content1": "Clients may use this method to retrieve the generated Artifacts for a Task. The agent determines the retention window for Tasks previously submitted to it. An agent may return an error code for Tasks that were past the retention window for an agent or for Tasks that are short-lived and not persisted by the agent.",
      "content2": "The client may also request the last N items of history of the Task which will include all Messages, in order, sent by client and server. By default this is 0 (no history)."
    },
    "cancelTask": {
      "title": "Cancel a Task",
      "content": "A client may choose to cancel previously submitted Tasks as shown below."
    },
    "setPushNotifications": {
      "title": "Set Task Push Notifications",
      "content": "Clients may configure a push notification URL for receiving an update on Task status change."
    },
    "getPushNotifications": {
      "title": "Get Task Push Notifications",
      "content": "Clients may retrieve the currently configured push notification configuration for a Task using this method."
    },
    "multiTurn": {
      "title": "Multi-turn Conversations",
      "content": "A Task may pause to be executed on the remote agent if it requires additional user input. When a Task is in input-required state, the client is required to provide additional input for the Task to resume processing on the remote agent.",
      "content2": "The Message included in the input-required state must include the details indicating what the client must do. For example \"fill out a form\" or \"log into SaaS service foo\". If this includes structured data, the instruction should be sent as one Part and the structured data as a second Part."
    },
    "streaming": {
      "title": "Streaming Support",
      "content": "For clients and remote agents capable of communicating over HTTP with SSE, clients can send the RPC request with method tasks/sendSubscribe when creating a new Task. The remote agent can respond with a stream of TaskStatusUpdateEvents (to communicate status changes or instructions/requests) and TaskArtifactUpdateEvents (to stream generated results). Note that TaskArtifactUpdateEvents can append new parts to existing Artifacts. Clients can use task/get to retrieve the entire Artifact outside of the streaming. Agents must set final: true attribute at the end of the stream or if the agent is interrupted and require additional user input.",
      "resubscribe": {
        "title": "Resubscribe to Task",
        "content": "A disconnected client may resubscribe to a remote agent that supports streaming to receive Task updates via SSE."
      }
    },
    "nonTextMedia": {
      "title": "Non-textual Media",
      "content": "Following is an example interaction between a client and an agent with non-textual data."
    },
    "structuredOutput": {
      "title": "Structured output",
      "content": "Both the client or the agent can request structured output from the other party."
    },
    "errorHandling": {
      "title": "Error Handling",
      "content": "Following is the ErrorMessage format for the server to respond to the client when it encounters an error processing the client request.",
      "errorCodes": "The following are the standard JSON-RPC error codes that the server can respond with for error scenarios:"
    }
  }
};