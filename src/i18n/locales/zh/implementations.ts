export default {
  "title": "实现与库",
  "officialSamples": {
    "title": "官方示例",
    "description": "这些示例演示了基本的 A2A 客户端/服务器通信。",
    "table": {
      "headers": {
        "language": "语言",
        "type": "类型",
        "framework": "框架",
        "description": "描述"
      },
      "rows": [
        {
          "language": "🐍 Python",
          "type": "通用库",
          "framework": "-",
          "description": "核心 HTTP、JSON-RPC、SSE 处理"
        },
        {
          "language": "🐍 Python",
          "type": "宿主 (客户端)",
          "framework": "CLI",
          "description": "命令行客户端示例"
        },
        {
          "language": "🐍 Python",
          "type": "宿主 (智能体)",
          "framework": "ADK",
          "description": "委派给 A2A 智能体的协调器智能体"
        },
        {
          "language": "🚀 JS/TS",
          "type": "服务器库",
          "framework": "Express",
          "description": "核心服务器实现"
        },
        {
          "language": "🚀 JS/TS",
          "type": "客户端库",
          "framework": "-",
          "description": "客户端实现"
        },
        {
          "language": "🚀 JS/TS",
          "type": "宿主 (客户端)",
          "framework": "CLI",
          "description": "命令行客户端示例"
        }
      ]
    }
  },
  "frameworkIntegrations": {
    "title": "框架集成（官方示例）",
    "description": "这些示例展示了使用特定框架构建的智能体如何公开 A2A 接口。",
    "table": {
      "headers": {
        "language": "语言",
        "framework": "智能体框架",
        "description": "智能体描述",
        "features": "展示的关键 A2A 功能"
      },
      "rows": [
        {
          "language": "🐍 Python",
          "framework": "LangGraph",
          "description": "货币转换",
          "features": "工具、流式处理、多轮对话"
        },
        {
          "language": "🐍 Python",
          "framework": "CrewAI",
          "description": "图像生成",
          "features": "非文本工件（文件）"
        },
        {
          "language": "🐍 Python",
          "framework": "Google ADK",
          "description": "费用报销",
          "features": "多轮对话、表单（数据部件）"
        },
        {
          "language": "🚀 JS/TS",
          "framework": "Genkit",
          "description": "电影信息/代码生成",
          "features": "工具、工件（文件）、异步"
        }
      ]
    }
  },
  "communityImplementations": {
    "title": "社区实现",
    "comingSoon": "社区实现将在可用时列在此处。"
  }
};