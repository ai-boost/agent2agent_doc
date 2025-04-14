import { SearchableContent } from '../types/search';
import i18n from '../i18n';

// Helper function to parse markdown from pages
export const parseMarkdownContent = (markdown: string): { headings: { text: string, level: number, id: string }[] } => {
  const headings: { text: string, level: number, id: string }[] = [];
  
  // Find headings in markdown
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;
  
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    
    headings.push({ text, level, id });
  }
  
  return { headings };
};

// This function would normally fetch content from APIs or files
// For simplicity, we're creating mock content based on our documentation structure
export const getContentByLanguage = async (language: string): Promise<SearchableContent[]> => {
  // In a real implementation, you would:
  // 1. Load content from your i18n files or other sources
  // 2. Process it to create searchable content
  // 3. Return it in the expected format

  // Normalize language code - map zh-CN to zh
  let currentLang = language || i18n.language || 'en';
  
  // Handle zh-CN locale by mapping it to zh
  if (currentLang === 'zh-CN') {
    currentLang = 'zh';
  }
  
  // Create base content from translations
  try {
    // Load main content sections
    const introduction = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/introduction`);
    const protocol = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/protocol`);
    const resources = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/resources`);
    const implementations = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/implementations`);
    const gettingStarted = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/getting-started`);
    const community = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/community`);

    // Load key topics
    const keyTopics = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/keyTopics`);
    const a2aAndMcp = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/a2aAndMcp`);
    const agentDiscovery = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/agentDiscovery`);
    const enterpriseReady = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/enterpriseReady`);
    const pushNotifications = await import(/* @vite-ignore */ `../i18n/locales/${currentLang}/pushNotifications`);

    // Convert translations to searchable content
    const searchContent: SearchableContent[] = [];

    // Introduction
    const introductionContent = introduction.default;
    searchContent.push({
      id: 'intro-what-is-a2a',
      title: introductionContent.whatIsA2A?.title || 'What is A2A?',
      content: introductionContent.whatIsA2A?.description || '',
      path: '/docs/introduction',
      section: introductionContent.title || 'Introduction',
      language: currentLang
    });

    // Add other introduction sections
    if (introductionContent.keyPrinciples) {
      searchContent.push({
        id: 'intro-key-principles',
        title: introductionContent.keyPrinciples.title || 'Key Principles',
        content: [
          introductionContent.keyPrinciples.simple,
          introductionContent.keyPrinciples.enterpriseReady,
          introductionContent.keyPrinciples.asyncFirst,
          introductionContent.keyPrinciples.modalityAgnostic,
          introductionContent.keyPrinciples.opaqueExecution
        ].join(' '),
        path: '/docs/introduction#key-principles',
        section: introductionContent.title || 'Introduction',
        language: currentLang
      });
    }

    if (introductionContent.howItWorks) {
      searchContent.push({
        id: 'intro-how-it-works',
        title: introductionContent.howItWorks.title || 'How It Works',
        content: [
          introductionContent.howItWorks.discovery,
          introductionContent.howItWorks.communication,
          introductionContent.howItWorks.execution,
          introductionContent.howItWorks.updates
        ].join(' '),
        path: '/docs/introduction#how-it-works',
        section: introductionContent.title || 'Introduction',
        language: currentLang
      });
    }

    // Protocol sections
    const protocolContent = protocol.default;
    Object.entries(protocolContent).forEach(([key, value]: [string, any]) => {
      if (key !== 'title' && key !== 'description' && typeof value === 'object') {
        if (value.title) {
          searchContent.push({
            id: `protocol-${key}`,
            title: value.title,
            content: value.content || '',
            path: `/docs/protocol/${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
            section: protocolContent.title || 'Protocol',
            language: currentLang
          });
        }
      }
    });

    // Getting started
    const gettingStartedContent = gettingStarted.default;
    if (gettingStartedContent.steps) {
      Object.entries(gettingStartedContent.steps).forEach(([stepKey, stepValue]: [string, any]) => {
        searchContent.push({
          id: `getting-started-${stepKey}`,
          title: stepValue.title || 'Getting Started Step',
          content: stepValue.description || '',
          path: '/docs/getting-started',
          section: gettingStartedContent.title || 'Getting Started',
          language: currentLang
        });
      });
    }

    // Resources
    const resourcesContent = resources.default;
    Object.entries(resourcesContent).forEach(([key, value]: [string, any]) => {
      if (key !== 'title' && typeof value === 'object') {
        if (value.title) {
          searchContent.push({
            id: `resources-${key}`,
            title: value.title,
            content: key === 'officialResources' 
              ? [value.website, value.github, value.blog].filter(Boolean).join(' ') 
              : value.description || '',
            path: '/docs/resources',
            section: resourcesContent.title || 'Resources',
            language: currentLang
          });
        }
      }
    });

    // Implementations
    const implementationsContent = implementations.default;
    Object.entries(implementationsContent).forEach(([key, value]: [string, any]) => {
      if (key !== 'title' && typeof value === 'object') {
        if (value.title) {
          searchContent.push({
            id: `implementations-${key}`,
            title: value.title,
            content: value.description || '',
            path: '/docs/implementations',
            section: implementationsContent.title || 'Implementations',
            language: currentLang
          });
        }
      }
    });

    // Community
    const communityContent = community.default;
    Object.entries(communityContent).forEach(([key, value]: [string, any]) => {
      if (key !== 'title' && key !== 'description' && typeof value === 'object') {
        if (value.title) {
          searchContent.push({
            id: `community-${key}`,
            title: value.title,
            content: value.description || '',
            path: '/community',
            section: communityContent.title || 'Community',
            language: currentLang
          });
        }
      }
    });

    // Key Topics
    const keyTopicsContent = keyTopics.default;
    // Main key topics landing page
    searchContent.push({
      id: 'key-topics-main',
      title: keyTopicsContent.title || 'Review Key Topics',
      content: keyTopicsContent.description || '',
      path: '/docs/key-topics',
      section: keyTopicsContent.title || 'Key Topics',
      language: currentLang
    });

    // A2A and MCP
    const a2aAndMcpContent = a2aAndMcp.default;
    searchContent.push({
      id: 'key-topics-a2a-mcp',
      title: a2aAndMcpContent.title || 'A2A and MCP',
      content: a2aAndMcpContent.tldr || '',
      path: '/docs/key-topics/a2a-and-mcp',
      section: keyTopicsContent.title || 'Key Topics',
      language: currentLang
    });

    if (a2aAndMcpContent.whyProtocols) {
      searchContent.push({
        id: 'key-topics-a2a-mcp-why',
        title: a2aAndMcpContent.whyProtocols.title || 'Why Protocols?',
        content: a2aAndMcpContent.whyProtocols.content || '',
        path: '/docs/key-topics/a2a-and-mcp#why-protocols',
        section: a2aAndMcpContent.title || 'A2A and MCP',
        language: currentLang
      });
    }

    // Agent Discovery
    const agentDiscoveryContent = agentDiscovery.default;
    searchContent.push({
      id: 'key-topics-agent-discovery',
      title: agentDiscoveryContent.title || 'Agent Discovery',
      content: agentDiscoveryContent.description || '',
      path: '/docs/key-topics/agent-discovery',
      section: keyTopicsContent.title || 'Key Topics',
      language: currentLang
    });

    if (agentDiscoveryContent.openDiscovery) {
      searchContent.push({
        id: 'key-topics-agent-discovery-open',
        title: agentDiscoveryContent.openDiscovery.title || 'Open Discovery',
        content: agentDiscoveryContent.openDiscovery.content || '',
        path: '/docs/key-topics/agent-discovery#open-discovery',
        section: agentDiscoveryContent.title || 'Agent Discovery',
        language: currentLang
      });
    }

    if (agentDiscoveryContent.curatedDiscovery) {
      searchContent.push({
        id: 'key-topics-agent-discovery-curated',
        title: agentDiscoveryContent.curatedDiscovery.title || 'Curated Discovery',
        content: agentDiscoveryContent.curatedDiscovery.content || '',
        path: '/docs/key-topics/agent-discovery#curated-discovery',
        section: agentDiscoveryContent.title || 'Agent Discovery',
        language: currentLang
      });
    }

    // Explicitly add the Private Discovery section with complete content
    if (agentDiscoveryContent.privateDiscovery) {
      searchContent.push({
        id: 'key-topics-agent-discovery-private',
        title: agentDiscoveryContent.privateDiscovery.title || 'Private Discovery',
        content: [
          agentDiscoveryContent.privateDiscovery.content || '',
          agentDiscoveryContent.privateDiscovery.consideration || '',
          agentDiscoveryContent.privateDiscovery.methods || ''
        ].filter(Boolean).join(' '),
        path: '/docs/key-topics/agent-discovery#private-discovery',
        section: agentDiscoveryContent.title || 'Agent Discovery',
        language: currentLang
      });
    }

    if (agentDiscoveryContent.securingAgentCards) {
      searchContent.push({
        id: 'key-topics-agent-discovery-secure',
        title: agentDiscoveryContent.securingAgentCards.title || 'Securing Agent Cards',
        content: [
          agentDiscoveryContent.securingAgentCards.content || '',
          agentDiscoveryContent.securingAgentCards.recommendation || ''
        ].join(' '),
        path: '/docs/key-topics/agent-discovery#securing-agent-cards',
        section: agentDiscoveryContent.title || 'Agent Discovery',
        language: currentLang
      });
    }

    // Enterprise Ready
    const enterpriseReadyContent = enterpriseReady.default;
    searchContent.push({
      id: 'key-topics-enterprise-ready',
      title: enterpriseReadyContent.title || 'Enterprise Ready',
      content: enterpriseReadyContent.description || '',
      path: '/docs/key-topics/enterprise-ready',
      section: keyTopicsContent.title || 'Key Topics',
      language: currentLang
    });

    if (enterpriseReadyContent.transportSecurity) {
      searchContent.push({
        id: 'key-topics-enterprise-ready-transport',
        title: enterpriseReadyContent.transportSecurity.title || 'Transport Level Security',
        content: enterpriseReadyContent.transportSecurity.content || '',
        path: '/docs/key-topics/enterprise-ready#transport-security',
        section: enterpriseReadyContent.title || 'Enterprise Ready',
        language: currentLang
      });
    }

    if (enterpriseReadyContent.clientIdentity) {
      searchContent.push({
        id: 'key-topics-enterprise-ready-identity',
        title: enterpriseReadyContent.clientIdentity.title || 'Client and User Identity',
        content: enterpriseReadyContent.clientIdentity.content || '',
        path: '/docs/key-topics/enterprise-ready#client-identity',
        section: enterpriseReadyContent.title || 'Enterprise Ready',
        language: currentLang
      });
    }

    // Push Notifications
    const pushNotificationsContent = pushNotifications.default;
    searchContent.push({
      id: 'key-topics-push-notifications',
      title: pushNotificationsContent.title || 'Push Notifications',
      content: pushNotificationsContent.description || '',
      path: '/docs/key-topics/push-notifications',
      section: keyTopicsContent.title || 'Key Topics',
      language: currentLang
    });

    if (pushNotificationsContent.connected) {
      searchContent.push({
        id: 'key-topics-push-notifications-connected',
        title: pushNotificationsContent.connected.title || 'Connected',
        content: pushNotificationsContent.connected.content || '',
        path: '/docs/key-topics/push-notifications#connected',
        section: pushNotificationsContent.title || 'Push Notifications',
        language: currentLang
      });
    }

    if (pushNotificationsContent.disconnected) {
      searchContent.push({
        id: 'key-topics-push-notifications-disconnected',
        title: pushNotificationsContent.disconnected.title || 'Disconnected',
        content: pushNotificationsContent.disconnected.content || '',
        path: '/docs/key-topics/push-notifications#disconnected',
        section: pushNotificationsContent.title || 'Push Notifications',
        language: currentLang
      });
    }

    return searchContent;
  } catch (error) {
    console.error('Error loading content:', error);
    
    // Fallback to basic content if there's an error
    const baseContent: SearchableContent[] = [
      {
        id: 'intro-what-is-a2a',
        title: currentLang === 'en' ? 'What is A2A?' : 
               currentLang === 'zh' ? '什么是A2A？' : 'A2Aとは？',
        content: currentLang === 'en' ? 'A2A (Agent2Agent) is an open protocol from Google and partners enabling different AI agents to communicate securely and collaborate on tasks.' : 
                 currentLang === 'zh' ? 'A2A (智能体对智能体) 是谷歌和合作伙伴推出的开放协议，使来自不同供应商/框架的AI智能体能够安全通信并协作完成任务。' : 
                 'A2A (Agent2Agent) はGoogleとパートナーによるオープンプロトコルで、さまざまなベンダー/フレームワークのAIエージェントが安全に通信し、タスクで協力できるようにします。',
        path: '/docs/introduction',
        section: currentLang === 'en' ? 'Introduction' : 
                 currentLang === 'zh' ? '简介' : 'はじめに',
        language: currentLang
      },
      {
        id: 'getting-started-basics',
        title: currentLang === 'en' ? 'Getting Started' : 
               currentLang === 'zh' ? '入门指南' : '入門ガイド',
        content: currentLang === 'en' ? 'How to get started with A2A protocol.' : 
                 currentLang === 'zh' ? '如何开始使用A2A协议。' : 
                 'A2Aプロトコルを始める方法。',
        path: '/docs/getting-started',
        section: currentLang === 'en' ? 'Getting Started' : 
                 currentLang === 'zh' ? '入门指南' : '入門ガイド',
        language: currentLang
      }
    ];
    
    return baseContent;
  }
};