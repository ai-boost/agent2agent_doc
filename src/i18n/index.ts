import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import language namespaces
import commonEN from './locales/en/common';
import homeEN from './locales/en/home';
import introductionEN from './locales/en/introduction';
import resourcesEN from './locales/en/resources';
import implementationsEN from './locales/en/implementations';
import communityEN from './locales/en/community';
import gettingStartedEN from './locales/en/getting-started';
import keyTopicsEN from './locales/en/keyTopics';
import a2aAndMcpEN from './locales/en/a2aAndMcp';
import agentDiscoveryEN from './locales/en/agentDiscovery';
import enterpriseReadyEN from './locales/en/enterpriseReady';
import pushNotificationsEN from './locales/en/pushNotifications';

// Protocol sub-files for English
import protocolIndexEN from './locales/en/protocol/index';
import protocolOverviewEN from './locales/en/protocol/overview';
import protocolKeyPrinciplesEN from './locales/en/protocol/keyPrinciples';
import protocolAgentCardEN from './locales/en/protocol/agentCard';
import protocolCommunicationEN from './locales/en/protocol/communication';
import protocolCoreObjectsEN from './locales/en/protocol/coreObjects';
import protocolSampleMethodsEN from './locales/en/protocol/sampleMethods';
import protocolFeedbackEN from './locales/en/protocol/feedback';

import commonZH from './locales/zh/common';
import homeZH from './locales/zh/home';
import introductionZH from './locales/zh/introduction';
import resourcesZH from './locales/zh/resources';
import implementationsZH from './locales/zh/implementations';
import communityZH from './locales/zh/community';
import gettingStartedZH from './locales/zh/getting-started';
import keyTopicsZH from './locales/zh/keyTopics';
import a2aAndMcpZH from './locales/zh/a2aAndMcp';
import agentDiscoveryZH from './locales/zh/agentDiscovery';
import enterpriseReadyZH from './locales/zh/enterpriseReady';
import pushNotificationsZH from './locales/zh/pushNotifications';

// Protocol sub-files for Chinese
import protocolIndexZH from './locales/zh/protocol/index';
import protocolOverviewZH from './locales/zh/protocol/overview';
import protocolKeyPrinciplesZH from './locales/zh/protocol/keyPrinciples';
import protocolAgentCardZH from './locales/zh/protocol/agentCard';
import protocolCommunicationZH from './locales/zh/protocol/communication';
import protocolCoreObjectsZH from './locales/zh/protocol/coreObjects';
import protocolSampleMethodsZH from './locales/zh/protocol/sampleMethods';
import protocolFeedbackZH from './locales/zh/protocol/feedback';

import commonJA from './locales/ja/common';
import homeJA from './locales/ja/home';
import introductionJA from './locales/ja/introduction';
import resourcesJA from './locales/ja/resources';
import implementationsJA from './locales/ja/implementations';
import communityJA from './locales/ja/community';
import gettingStartedJA from './locales/ja/getting-started';
import keyTopicsJA from './locales/ja/keyTopics';
import a2aAndMcpJA from './locales/ja/a2aAndMcp';
import agentDiscoveryJA from './locales/ja/agentDiscovery';
import enterpriseReadyJA from './locales/ja/enterpriseReady';
import pushNotificationsJA from './locales/ja/pushNotifications';

// Protocol sub-files for Japanese
import protocolIndexJA from './locales/ja/protocol/index';
import protocolOverviewJA from './locales/ja/protocol/overview';
import protocolKeyPrinciplesJA from './locales/ja/protocol/keyPrinciples';
import protocolAgentCardJA from './locales/ja/protocol/agentCard';
import protocolCommunicationJA from './locales/ja/protocol/communication';
import protocolCoreObjectsJA from './locales/ja/protocol/coreObjects';
import protocolSampleMethodsJA from './locales/ja/protocol/sampleMethods';
import protocolFeedbackJA from './locales/ja/protocol/feedback';

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEN,
        home: homeEN,
        introduction: introductionEN,
        resources: resourcesEN,
        implementations: implementationsEN,
        community: communityEN,
        'getting-started': gettingStartedEN,
        keyTopics: keyTopicsEN,
        a2aAndMcp: a2aAndMcpEN,
        agentDiscovery: agentDiscoveryEN,
        enterpriseReady: enterpriseReadyEN,
        pushNotifications: pushNotificationsEN,
        protocol: {
          ...protocolIndexEN,
          overview: protocolOverviewEN,
          keyPrinciples: protocolKeyPrinciplesEN,
          agentCard: protocolAgentCardEN,
          communication: protocolCommunicationEN,
          coreObjects: protocolCoreObjectsEN,
          sampleMethods: protocolSampleMethodsEN,
          feedbackAndChanges: protocolFeedbackEN
        }
      },
      zh: {
        common: commonZH,
        home: homeZH,
        introduction: introductionZH,
        resources: resourcesZH,
        implementations: implementationsZH,
        community: communityZH,
        'getting-started': gettingStartedZH,
        keyTopics: keyTopicsZH,
        a2aAndMcp: a2aAndMcpZH,
        agentDiscovery: agentDiscoveryZH,
        enterpriseReady: enterpriseReadyZH,
        pushNotifications: pushNotificationsZH,
        protocol: {
          ...protocolIndexZH,
          overview: protocolOverviewZH,
          keyPrinciples: protocolKeyPrinciplesZH,
          agentCard: protocolAgentCardZH,
          communication: protocolCommunicationZH,
          coreObjects: protocolCoreObjectsZH,
          sampleMethods: protocolSampleMethodsZH,
          feedbackAndChanges: protocolFeedbackZH
        }
      },
      ja: {
        common: commonJA,
        home: homeJA,
        introduction: introductionJA,
        resources: resourcesJA,
        implementations: implementationsJA,
        community: communityJA,
        'getting-started': gettingStartedJA,
        keyTopics: keyTopicsJA,
        a2aAndMcp: a2aAndMcpJA,
        agentDiscovery: agentDiscoveryJA,
        enterpriseReady: enterpriseReadyJA,
        pushNotifications: pushNotificationsJA,
        protocol: {
          ...protocolIndexJA,
          overview: protocolOverviewJA,
          keyPrinciples: protocolKeyPrinciplesJA,
          agentCard: protocolAgentCardJA,
          communication: protocolCommunicationJA,
          coreObjects: protocolCoreObjectsJA,
          sampleMethods: protocolSampleMethodsJA,
          feedbackAndChanges: protocolFeedbackJA
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;