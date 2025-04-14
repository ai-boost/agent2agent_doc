export default {
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