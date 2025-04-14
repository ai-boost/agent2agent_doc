export default {
  "title": "A2A 简介",
  "unlockCollaborative": {
    "title": "通过新的开放协议解锁智能体之间的协作场景",
    "seamlessCollaboration": "无缝的智能体协作",
    "seamlessCollaborationDesc": "引入了一种标准协议，使不同框架和各种供应商构建的自主不透明智能体能够与彼此和用户有效地通信和协作，解决了当前智能体互操作性缺乏的问题。",
    "enterpriseIntegration": "简化企业智能体集成",
    "enterpriseIntegrationDesc": "提供了一种将智能体集成到现有企业应用程序的直接方式，使企业能够在其技术环境中利用智能体功能。",
    "enterpriseRequirements": "支持关键企业需求",
    "enterpriseRequirementsDesc": "提供安全、企业级智能体生态系统所必需的核心功能，包括能力发现、用户体验协商、任务和状态管理以及安全协作。"
  },
  "openStandards": {
    "title": "连接智能体的开放标准",
    "mcp": {
      "title": "MCP (模型上下文协议) 用于工具和资源",
      "point1": "将智能体连接到具有结构化输入/输出的工具、API和资源。",
      "point2": "Google ADK支持MCP工具。使智能体能够使用广泛的MCP服务器。"
    },
    "a2a": {
      "title": "A2A (智能体对智能体协议) 用于智能体间协作",
      "point1": "不同智能体之间的动态、多模式通信，无需共享内存、资源和工具",
      "point2": "由社区驱动的开放标准。",
      "point3": "提供使用Google ADK、LangGraph、Crew.AI的示例"
    }
  },
  "feedback": {
    "title": "反馈和变更",
    "workInProgress": "A2A是一项正在进行的工作，预计会根据社区反馈进行变更。该仓库包含初始规范、文档和示例代码。我们将继续更新此仓库，添加更多功能、示例、规范和库。当规范和示例可以升级为生产质量的SDK时，我们将发布1.0版本并维护稳定的发行版。",
    "blogPost": "要了解A2A设计原则和支持A2A的外部合作伙伴，请阅读公告博客文章",
    "contribute": "有兴趣为A2A协议做贡献并了解其内部工作原理？访问Github"
  },
  "whatIsA2A": {
    "title": "什么是A2A？（简介）",
    "description": "A2A (智能体对智能体) 是谷歌和合作伙伴推出的**开放协议**，使来自不同供应商/框架的**AI智能体**能够**安全通信**并**协作完成任务**。它旨在打破孤立智能体系统之间的壁垒，实现更复杂的跨应用自动化。",
    "officialWebsite": "官方网站：",
    "officialGitHub": "官方 GitHub："
  },
  "keyPrinciples": {
    "title": "核心原则",
    "simple": "**简单**：使用现有标准（HTTP、JSON-RPC、SSE）。",
    "enterpriseReady": "**企业级**：专注于身份验证、安全性、隐私和监控。",
    "asyncFirst": "**异步优先**：处理长时间运行的任务和人在循环中的情况。",
    "modalityAgnostic": "**模态无关**：支持文本、文件、表单、流等。",
    "opaqueExecution": "**不透明执行**：智能体无需共享内部逻辑/工具即可交互。"
  },
  "howItWorks": {
    "title": "A2A 如何工作？（高层次概述）",
    "discovery": "**发现**：智能体发布`智能体卡片`（JSON），描述其功能、端点和身份验证需求。",
    "communication": "**通信**：`客户端`智能体使用 HTTP/JSON-RPC 2.0 向`远程智能体（服务器）`发送`任务`请求（包含带有`部件`的`消息`）。",
    "execution": "**执行与响应**：服务器处理任务，更新其`状态`。它以最终状态和任何生成的`工件`（结果，也包含`部件`）进行响应。",
    "updates": "**更新**：对于长时间任务，服务器可以选择通过服务器发送事件（SSE）流式传输`任务状态更新事件`或`任务工件更新事件`，或使用推送通知。",
    "details": "详情请参阅[官方技术文档](https://google.github.io/A2A/#/documentation)。"
  }
};