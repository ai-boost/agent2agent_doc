export default {
  "title": "Agent-to-Agent Communication",
  "content": "The communication between a Client and a Remote Agent is oriented towards task completion where agents collaboratively fulfill an end-user's request. A Task object allows a Client and a Remote Agent to collaborate for completing the submitted task.",
  "content2": "A task can be completed by a remote agent immediately or it can be long-running. For long-running tasks, the client may poll the agent for fetching the latest status. Agents can also push notifications to the client via SSE (if connected) or through an external notification service."
}