<div align="center">
  <h2 align="center">✨ A2A 协议文档网站 ✨</h2>
  <p align="center">
    <img src="assets/agent2agent_doc.gif" alt="A2A 网站横幅" width="600">
  </p>
  <p>
      <a href="README.md">English</a> | <a href="README_zh.md">简体中文</a> | <a href="README_ja.md">日本語</a>
  </p>
  <p align="center">
      Agent2Agent 文档 – 您理解和实施 A2A 协议的全面指南。
  </p>
</div>

# A2A 协议文档

![A2A 协议横幅](https://google.github.io/A2A/images/a2a_banner.png)

## 简介

A2A 协议文档是一个综合性的 Web 应用程序，旨在记录和解释 Agent2Agent (A2A) 协议——一个由 Google 及其合作伙伴开发的用于 AI 智能体互操作性的开放标准。该文档网站旨在成为一个用户友好的指南，帮助理解、实施和使用 A2A 协议。

该网站特点：

-   详细的 A2A 协议组件文档
-   交互式代码示例和用例
-   多语言支持（英语、中文、日语）
-   适用于桌面和移动设备的响应式设计
-   全文搜索功能

该项目采用现代 Web 技术构建，包括 React、TypeScript、Tailwind CSS 和用于国际化的 i18next。

## 使用方法

### 先决条件

-   Node.js (v16 或更高版本)
-   npm (v7 或更高版本)

### 安装

1.  克隆仓库：
    ```
    git clone https://github.com/your-username/a2a-protocol-docs.git
    cd a2a-protocol-docs
    ```

2.  安装依赖：
    ```
    npm install
    ```

3.  启动开发服务器：
    ```
    npm run dev
    ```

4.  打开浏览器并访问 `http://localhost:5173` (或您终端中指示的端口)

## 项目结构

```
├── public/                  # 静态资源
├── src/
│   ├── components/          # 可复用 UI 组件
│   │   ├── protocol/        # 协议特定组件
│   │   ├── shared/          # 共享 UI 组件
│   │   └── ...
│   ├── context/             # React Context 提供者
│   ├── i18n/                # 国际化
│   │   ├── locales/         # 语言翻译
│   │   │   ├── en/          # 英语
│   │   │   ├── zh/          # 中文
│   │   │   └── ja/          # 日语
│   │   └── index.ts         # i18n 配置
│   ├── layouts/             # 页面布局组件
│   ├── pages/               # 页面组件
│   │   ├── keyTopics/       # 关键主题页面
│   │   ├── protocol/        # 协议文档页面
│   │   └── ...
│   ├── types/               # TypeScript 类型定义
│   ├── utils/               # 工具函数
│   ├── App.tsx              # 应用入口点
│   ├── main.tsx             # 主渲染逻辑
│   └── index.css            # 全局样式
├── .eslintrc.js             # ESLint 配置
├── index.html               # HTML 模板
├── package.json             # 项目依赖
├── tailwind.config.js       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
└── vite.config.ts           # Vite 配置
```

## 部署

该项目可以使用各种托管平台进行部署。以下是常见部署方法的说明：

### 生产构建

生成生产构建文件：

```bash
npm run build
```

这将在 `dist` 目录下创建优化的生产文件。

### 部署到 Netlify

1.  将代码推送到 GitHub 仓库
2.  登录 Netlify
3.  点击 "New site from Git" 并选择您的仓库
4.  使用以下构建设置：
    -   构建命令：`npm run build`
    -   发布目录：`dist`
5.  点击 "Deploy site"

### 部署到 Vercel

1.  将代码推送到 GitHub 仓库
2.  登录 Vercel
3.  点击 "Import Project" 并选择您的仓库
4.  使用以下构建设置：
    -   框架预设：Vite
    -   构建命令：`npm run build`
    -   输出目录：`dist`
5.  点击 "Deploy"

### 部署到 GitHub Pages

1.  安装 gh-pages 包：
    ```bash
    npm install --save-dev gh-pages
    ```

2.  将以下内容添加到您的 `package.json`：
    ```json
    "homepage": "https://your-username.github.io/a2a-protocol-docs",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
    *将 `your-username` 和 `a2a-protocol-docs` 替换为您的 GitHub 用户名和仓库名。*

3.  运行部署命令：
    ```bash
    npm run deploy
    ```

## 贡献

欢迎贡献！请随时提交 Pull Request。

## 许可证

该项目根据 MIT 许可证授权 - 详情请参阅 LICENSE 文件。
