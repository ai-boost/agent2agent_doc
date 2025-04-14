export default {
  "title": "智能体卡片",
  "content": "支持A2A的远程智能体需要以JSON格式发布一个智能体卡片，描述智能体的能力/技能和认证机制。客户端使用智能体卡片信息来识别能够执行任务的最佳智能体，并利用A2A与该远程智能体通信。",
  "discovery": {
    "title": "发现",
    "content": "我们建议智能体在https://<基础URL>/.well-known/agent.json托管其智能体卡片。这与DNS方法兼容，其中客户端通过DNS找到服务器IP，并发送HTTP GET来检索智能体卡片。我们还预计系统将维护私有注册表（例如'智能体目录'或私有市场等）。更多讨论可以在这篇文档中找到。"
  },
  "representation": {
    "title": "表示",
    "content": "以下是智能体卡片的建议表示："
  }
}