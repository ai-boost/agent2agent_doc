export default {
  "title": "远程智能体到客户端更新",
  "description": "智能体如何使用推送通知和流式传输来随时间传达更新",
  "introduction": {
    "content": "某些任务可能需要超过几秒钟的时间。它们可能需要几分钟、几小时甚至几天（\"将样品运送到我在佛罗里达的客户那里，并在到达时通知我\"）。A2A智能体需要在较长时间内进行通信。这包括它们在连接和未连接时。",
    "agentCardCapabilities": "客户端可以在智能体卡片中检查智能体是否支持流式传输和推送通知功能。"
  },
  "capabilities": {
    "title": "智能体能力",
    "agentCardExample": "智能体卡片表明支持的功能："
  },
  "updateMethods": {
    "title": "更新方法",
    "content": "智能体可以使用以下方法获取有关任务执行的更新：",
    "persistentConnection": "<strong>持久连接：</strong> 客户端可以使用HTTP + 服务器发送事件与智能体建立持久连接。然后智能体可以使用这些连接为每个客户端发送任务更新。",
    "pushNotifications": "<strong>推送通知：</strong> 智能体可以将最新的完整任务对象负载发送到客户端指定的推送通知URL。这类似于某些平台上的webhook。",
    "notificationTiming": "无论客户端是否已订阅任务，都可以为其任务设置通知。当智能体将任务处理到\"已完成\"、\"需要输入\"等停止状态，并完全生成与状态相关的消息和工件时，应发送通知。"
  },
  "connected": {
    "title": "已连接",
    "content": "在连接状态下，智能体之间通过任务（及相关）消息互相更新。客户端和远程智能体可以通过同一连接并发处理多个任务。",
    "taskSend": "客户端使用Task/Send更新当前任务以提供更多信息或回复智能体的需求。远程智能体在流式传输时回复任务更新，不流式传输时回复任务。在不流式传输时，以合理的间隔进行轮询是可接受的。",
    "resubscribe": "如果智能体断开连接，它们可以通过Task/Resubscribe方法恢复连接并接收实时更新。"
  },
  "disconnected": {
    "title": "已断开连接",
    "content": "对于断开连接的场景，A2A支持推送通知机制，通过该机制，智能体可以通过PushNotificationConfig在连接会话之外通知客户端更新。在企业内部和跨企业，智能体验证通知服务的身份、向服务验证自己并提供将通知与执行任务相关联的标识符至关重要。",
    "notificationService": "通知服务应被视为与客户端智能体分开的服务，并不保证甚至不期望它直接是客户端。此通知服务负责验证和授权智能体，并将经过验证的通知代理到适当的端点（可以是从pub/sub队列到电子邮件收件箱到另一个通知服务等任何内容）。",
    "simpleScenarios": "对于具有隔离客户端-智能体对的人为场景（例如，包含VPC中的本地服务网格等），客户端可以选择简单地打开端口并充当自己的通知服务。然而，任何企业实施都建议有一个集中式服务，该服务使用受信任的通知凭证验证远程智能体，并能处理在线/离线场景。这可以类似地看作一个具有自己的认证和授权控制的移动推送通知服务。"
  },
  "settingNotifications": {
    "title": "设置任务通知",
    "content": "客户端需要设置任务推送通知配置以异步接收任务更新。他们应该生成一个taskId，并使用\"tasks/pushNotification/set\" RPC或直接在\"tasks/send\"、\"tasks/sendSubscribe\"的pushNotification参数中为其设置推送通知配置。",
    "interfaceDefinition": "接口定义",
    "requestExample": "向任务发送请求（带有推送通知配置）",
    "responseExample": "响应",
    "setPushExample": "设置推送通知配置的请求",
    "setPushResponse": "响应"
  },
  "agentSecurity": {
    "title": "智能体安全",
    "content": "智能体不应盲目信任客户端指定的推送通知URL。一些常用的做法如下：",
    "verifyURL": "他们应该通过发出GET挑战请求来验证推送通知URL。",
    "challengeRequest": "挑战请求可以是相同的推送通知URL，但提供了validationToken，可以作为URL查询参数或头部。",
    "responseValidation": "通知服务（或在简单情况下的客户端）应通过返回相同的validationToken来响应挑战请求。",
    "avoidDDOS": "这看起来很简单，但它有助于避免恶意客户端诱骗远程智能体对URL进行DDOS攻击。",
    "periodicCheck": "智能体可以在注册推送通知url时发出一次性挑战请求，或定期检查此URL。",
    "challengeExample": "挑战请求和响应的示例",
    "signValidation": "为了进一步验证通知服务的身份，可以要求其使用预定义的密钥对上述validationToken进行签名。",
    "secretTypes": {
      "agentGenerated": "密钥可以由智能体生成，专门用于此挑战请求。",
      "sharedKey": "或者，如果通知服务和智能体使用对称共享密钥进行认证，通知服务可以使用相同的密钥来签署validationToken。"
    }
  },
  "receiverSecurity": {
    "title": "通知接收器安全",
    "content": "通知接收器应检查它们收到的通知的真实性。以下是一些可以做到这一点的方法。此外，有关通知安全的想法集合可在以下网址找到",
    "webhooksFyi": "https://webhooks.fyi",
    "asymmetricKeys": {
      "title": "非对称密钥",
      "content": "可以使用ECDSA、RSA等生成私钥和公钥对。这些可以由通知服务器或远程智能体生成。",
      "serverGenerated": "如果密钥对由通知服务器生成（例如APNS），则需要向智能体提供私钥。通知服务器应保留公钥，以验证由智能体使用私钥签名的传入请求负载。",
      "agentGenerated": "如果密钥对由智能体生成。那么可以有两个选项：",
      "options": {
        "manual": "公钥手动提供给通知接收器。",
        "jwks": "或者公钥可以由智能体通过JWKS协议提供。"
      },
      "signing": "智能体可以使用私钥签署请求负载并提供请求签名作为头部。或者它们可以使用JWT协议生成令牌并将其作为签名提供。JWT协议的好处还在于它标准化了常见字段，如keyId、请求时间戳。"
    },
    "symmetricKeys": {
      "title": "对称密钥",
      "content": "一种更简单的方法是通知服务器和智能体使用相同的共享密钥进行签名和验证。通知服务器通过使用密钥重新签署负载来验证签名。同样，可以使用JWT生成签名令牌。",
      "advantage": "非对称密钥有一个优势，因为只有智能体知道公钥，因此密钥泄露的可能性较小。"
    },
    "oauth": {
      "title": "OAuth",
      "content": "智能体从OAuth服务器获取认证令牌，并在推送通知请求中提供该令牌，可以作为头部或作为请求负载的一部分。通知服务器提取OAuth令牌并从OAuth服务器验证它。"
    },
    "bearerToken": {
      "title": "持有者令牌",
      "content": "任何一方都可以生成持有者令牌。如果由通知接收器生成，它可以通过任务推送通知配置向远程智能体提供此令牌。",
      "security": "由于这是明文请求的一部分，因此有泄漏的可能性，因此可以使用此令牌发送恶意请求负载。使用非对称或对称密钥，负载已签名，这允许通知接收器验证请求负载的真实性。"
    }
  },
  "otherConsiderations": {
    "title": "其他考虑事项",
    "replayPrevention": {
      "title": "重放防止",
      "content": "在JWT或其他头部中使用iat来描述事件时间戳。理想情况下，任何超过5分钟的事件都应该被拒绝。这提供了一些防止重放攻击的保护。时间戳也应该是整体请求数据的一部分，该数据被用于计算请求签名。这也验证了时间戳的真实性。"
    },
    "keyRotation": {
      "title": "密钥轮换",
      "content": "理想情况下，智能体应该实现零停机时间的密钥轮换。一种方法是JWKS，它允许智能体发布其公钥，包括旧的和新的。通知接收器应能够使用这两个密钥来验证通知请求负载。"
    }
  }
};