export default {
  "title": "Overview",
  "content": "High-level overview of the A2A protocol architecture",
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
}