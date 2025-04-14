export default {
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
}