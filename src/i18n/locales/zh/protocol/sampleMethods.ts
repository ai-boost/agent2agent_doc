export default {
  "title": "示例方法和JSON响应",
  "agentCard": {
    "title": "智能体卡片"
  },
  "sendTask": {
    "title": "发送任务",
    "content": "允许客户端向远程智能体发送内容以启动新任务、恢复中断的任务或重新打开已完成的任务。任务中断可能是由于智能体需要额外的用户输入或运行时错误造成的。"
  },
  "getTask": {
    "title": "获取任务",
    "content1": "客户端可以使用此方法检索任务的生成工件。智能体确定先前提交给它的任务的保留窗口。智能体可能会为超过智能体保留窗口的任务或短暂且未被智能体持久化的任务返回错误代码。",
    "content2": "客户端还可以请求任务的最后N个历史项目，这将包括客户端和服务器按顺序发送的所有消息。默认情况下，这是0（无历史记录）。"
  },
  "cancelTask": {
    "title": "取消任务",
    "content": "客户端可以选择取消先前提交的任务，如下所示。"
  },
  "setPushNotifications": {
    "title": "设置任务推送通知",
    "content": "客户端可以配置推送通知URL，以接收任务状态更改的更新。"
  },
  "getPushNotifications": {
    "title": "获取任务推送通知",
    "content": "客户端可以使用此方法检索当前为任务配置的推送通知配置。"
  },
  "multiTurn": {
    "title": "多轮对话",
    "content": "如果远程智能体需要额外的用户输入，任务可能会暂停执行。当任务处于input-required状态时，客户端需要提供额外的输入，以便任务在远程智能体上恢复处理。",
    "content2": "包含在input-required状态中的消息必须包括指示客户端必须做什么的详细信息。例如\"填写表单\"或\"登录SaaS服务foo\"。如果这包括结构化数据，指令应作为一个部分发送，结构化数据作为第二个部分。"
  },
  "streaming": {
    "title": "流式支持",
    "content": "对于能够通过带有SSE的HTTP进行通信的客户端和远程智能体，客户端可以在创建新任务时使用方法tasks/sendSubscribe发送RPC请求。远程智能体可以响应一系列TaskStatusUpdateEvents（用于传达状态更改或指令/请求）和TaskArtifactUpdateEvents（用于流式传输生成的结果）。请注意，TaskArtifactUpdateEvents可以向现有工件附加新部分。客户端可以使用task/get在流之外检索整个工件。智能体必须在流的末尾设置final: true属性，或者如果智能体被中断并需要额外的用户输入。",
    "resubscribe": {
      "title": "重新订阅任务",
      "content": "断开连接的客户端可以重新订阅支持流式传输的远程智能体，以通过SSE接收任务更新。"
    }
  },
  "nonTextMedia": {
    "title": "非文本媒体",
    "content": "以下是客户端和智能体之间使用非文本数据的示例交互。"
  },
  "structuredOutput": {
    "title": "结构化输出",
    "content": "客户端或智能体都可以请求对方提供结构化输出。"
  },
  "errorHandling": {
    "title": "错误处理",
    "content": "以下是当服务器在处理客户端请求时遇到错误时，响应客户端的ErrorMessage格式。",
    "errorCodes": "以下是服务器可以针对错误场景响应的标准JSON-RPC错误代码："
  }
}