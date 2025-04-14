export default {
  "title": "Remote Agent to Client Updates",
  "description": "How agents communicate updates over time using push notifications and streaming",
  "introduction": {
    "content": "Some tasks can take more than seconds. They can take minutes, or hours, or even days (\"ship a sample to my client in Florida and notify me when it arrives\"). A2A agents need to communicate over long periods of time. This includes while they are connected and not connected.",
    "agentCardCapabilities": "Clients can check whether an agent supports streaming and pushNotifications capability in the agent card."
  },
  "capabilities": {
    "title": "Agent Capabilities",
    "agentCardExample": "An agent card indicates supported capabilities:"
  },
  "updateMethods": {
    "title": "Update Methods",
    "content": "The agent can use below methods to get updates about task execution:",
    "persistentConnection": "<strong>Persistent Connection:</strong> Clients can establish a persistent connection with the agent using HTTP + Server-sent events. The agent can then send task updates using those connections per client.",
    "pushNotifications": "<strong>Push Notifications:</strong> Agents can send the latest full Task object payload to client specified push notification URL. This is similar to webhooks on some platforms.",
    "notificationTiming": "Clients can set notifications for their tasks whether they have subscribed to a Task or not. Agents should send a notification when Agent has processed a task to a stopping state like \"completed\", \"input-required\" etc and fully generated state associated message and artifacts."
  },
  "connected": {
    "title": "Connected",
    "content": "While connected, Agents update each other with Task (and related) messages. Clients and Remote Agents can work on multiple tasks concurrently over the same connection.",
    "taskSend": "Clients use Task/Send to update a current task with more information or reply to an agent need. Remote Agents reply with Task Updates while streaming or Task while not streaming. While not streaming, it is acceptable to poll at reasonable intervals.",
    "resubscribe": "If the agents become disconnected, they can resume the connection and receive live updates via the Task/Resubscribe method."
  },
  "disconnected": {
    "title": "Disconnected",
    "content": "For disconnected scenarios, A2A supports a push notification mechanism whereby an Agent can notify a Client of an update outside of a connected session via a PushNotificationConfig. Within and across enterprises, it is critical that the agent verifies the identity of the notification service, authenticates itself with the service, and presents an identifier that ties the notification to the executing task.",
    "notificationService": "The NotificationService should be considered a separate service from the client agent, and it is not guaranteed or even expected to be the client directly. This NotificationService is responsible for authenticating and authorizing the agent and for proxying the verified notification to the appropriate endpoint (which could be anything from a pub/sub queue, to an email inbox, to another notification service, etc).",
    "simpleScenarios": "For contrived scenarios with isolated client-agent pairs (e.g. local service mesh in a contained VPC, etc.), the client may choose to simply open a port and act as its own NotificationService. However, any enterprise implementation is recommended to have a centralized service that authenticates the remote agents with trusted notification credentials and can handle online/offline scenarios. This can be thought of similarly to a mobile Push Notification Service with its own Authentication and Authorization controls."
  },
  "settingNotifications": {
    "title": "Setting Task Notifications",
    "content": "Clients need to set task push notification config to asynchronously receive task updates. They should generate a taskId and set the push notification configuration for the same using \"tasks/pushNotification/set\" RPC or directly in the pushNotification param of \"tasks/send\", \"tasks/sendSubscribe\".",
    "interfaceDefinition": "Interface definitions",
    "requestExample": "Request to send to a task (with push notification configuration)",
    "responseExample": "Response",
    "setPushExample": "Request to set push notification config",
    "setPushResponse": "Response"
  },
  "agentSecurity": {
    "title": "Agent Security",
    "content": "Agents should not blindly trust the push notification URL specified by the client. Some commonly used practices are as below:",
    "verifyURL": "They should verify the push notification URL by issuing a GET challenge request.",
    "challengeRequest": "The challenge request can be the same push notification URL but with a validationToken provided either as a URL query param or a header.",
    "responseValidation": "The notification service (or the client in simple cases) should respond to challenge request by returning the same validationToken.",
    "avoidDDOS": "This seems simple but it helps avoid tricking remote agent into DDOS-ing a URL by a malicious client.",
    "periodicCheck": "Agents can issue this challenge request one-time when the push notification url is registered or keep checking this URL periodically.",
    "challengeExample": "Example of a challenge request and response",
    "signValidation": "To further verify the identity of the notification service, it can be asked to sign the above validationToken using a pre-determined secret.",
    "secretTypes": {
      "agentGenerated": "The secret could be generated by the agent, specifically for this challenge request.",
      "sharedKey": "Or if the notification service and agent use a symmetric shared key for authentication, the same key can be used by notification service to sign the validationToken."
    }
  },
  "receiverSecurity": {
    "title": "Notification Receiver Security",
    "content": "Notification Receivers should check the authenticity of the notifications they are receiving. A few ways they can do that are described as follows. Also, a collection of ideas for notification security can be found at",
    "webhooksFyi": "https://webhooks.fyi",
    "asymmetricKeys": {
      "title": "Asymmetric keys",
      "content": "A pair of private and public keys can be generated using ECDSA, RSA etc. These can be generated by the notification server or the remote agent.",
      "serverGenerated": "If the key pair is generated by the notification server, (ex. APNS), the private key needs to be supplied to the agent. The notification server should keep the public key to verify incoming request payloads signed by the agent using the private key.",
      "agentGenerated": "If the key pair is generated by the agent. Then there can be two options:",
      "options": {
        "manual": "The public key is manually provided to the Notification Receiver.",
        "jwks": "Or the public keys can be provided by the agent through JWKS protocol."
      },
      "signing": "Agents can sign request payload using the private key and provide the request signature as a header. Or they can use JWT protocol to generate a token and provide that as a signature. Benefit of JWT protocol would also be that it standardises common fields like keyId, request timestamp."
    },
    "symmetricKeys": {
      "title": "Symmetric keys",
      "content": "A simpler method can be that both notification server and agents use the same shared key to sign and verify. The notification server verifies the signature by re-signing the payload with the key. Again JWT can be used to generate the signature token.",
      "advantage": "Asymmetric keys have an advantage as only the agent knows the public key and hence less chances of the key being leaked."
    },
    "oauth": {
      "title": "OAuth",
      "content": "Agent gets an auth token from OAuth server and supplies that in the push notification request, either as a header or as part of request payload. Notification server extracts the OAuth token and verifies it from the OAuth server."
    },
    "bearerToken": {
      "title": "Bearer Token",
      "content": "Either party can generate the bearer token. If generated by the Notification Receiver, it can provide this token to the remote agent through the task push notification configuration.",
      "security": "Since this is part of a request in plain-text, this has a chance of being leaked and hence malicious request payloads can be sent with this token. With asymmetric or symmetric keys, the payload was signed, which allowed Notification Receivers to verify authenticity of request payloads."
    }
  },
  "otherConsiderations": {
    "title": "Other Considerations",
    "replayPrevention": {
      "title": "Replay Prevention",
      "content": "Use iat in JWT or other header to describe the event timestamp. Ideally any event older than 5 mins should be rejected. This provides some protection from replay attacks. The timestamp should also be part of the overall request data which is fed into calculation of request signature. This validates the authenticity of timestamps as well."
    },
    "keyRotation": {
      "title": "Key Rotation",
      "content": "Ideally agents should implement a key rotation with zero downtime. One way to do this is JWKS, it allows agents to publish their public keys, both old and new. Notification Receivers should be able to use both the keys to validate the notification request payload."
    }
  }
};