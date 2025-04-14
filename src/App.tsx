import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

// Layouts
import DocumentationLayout from './layouts/DocumentationLayout';

// Pages
import HomePage from './pages/HomePage';
import DocsLandingPage from './pages/DocsLandingPage';
import IntroductionPage from './pages/IntroductionPage';
import GettingStartedPage from './pages/GettingStartedPage';
import ResourcesPage from './pages/ResourcesPage';
import ImplementationsPage from './pages/ImplementationsPage';
import CommunityPage from './pages/CommunityPage';
import ProtocolPage from './pages/ProtocolPage';

// Protocol Sub-Pages
import OverviewPage from './pages/protocol/OverviewPage';
import KeyPrinciplesPage from './pages/protocol/KeyPrinciplesPage';
import AgentCardPage from './pages/protocol/AgentCardPage';
import CommunicationPage from './pages/protocol/CommunicationPage';
import CoreObjectsPage from './pages/protocol/CoreObjectsPage';
import SampleMethodsPage from './pages/protocol/SampleMethodsPage';
import FeedbackPage from './pages/protocol/FeedbackPage';

// Key Topics Pages
import ReviewKeyTopicsPage from './pages/ReviewKeyTopicsPage';
import A2AandMCPPage from './pages/keyTopics/A2AandMCPPage';
import AgentDiscoveryPage from './pages/keyTopics/AgentDiscoveryPage';
import EnterpriseReadyPage from './pages/keyTopics/EnterpriseReadyPage';
import PushNotificationsPage from './pages/keyTopics/PushNotificationsPage';

// Context
import { SearchProvider } from './context/SearchContext';

// Conditional Footer component based on route
const ConditionalFooter = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Show footer only on homepage and community page
  const showFooter = path === '/' || path === '/community';
  
  return showFooter ? <Footer /> : null;
};

function App() {
  const { t, i18n } = useTranslation('common');

  // Update document title when language changes
  useEffect(() => {
    document.title = t('siteTitle');
  }, [t, i18n.language]);

  return (
    <Router>
      <SearchProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <SearchResults />
          <main className="flex-grow flex flex-col overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/community" element={<CommunityPage />} />
              
              {/* Documentation routes with sidebar */}
              <Route path="/docs" element={<DocumentationLayout />}>
                <Route index element={<DocsLandingPage />} />
                <Route path="introduction" element={<IntroductionPage />} />
                <Route path="getting-started" element={<GettingStartedPage />} />
                <Route path="protocol" element={<ProtocolPage />} />
                <Route path="protocol/overview" element={<OverviewPage />} />
                <Route path="protocol/key-principles" element={<KeyPrinciplesPage />} />
                <Route path="protocol/agent-card" element={<AgentCardPage />} />
                <Route path="protocol/communication" element={<CommunicationPage />} />
                <Route path="protocol/core-objects" element={<CoreObjectsPage />} />
                <Route path="protocol/sample-methods" element={<SampleMethodsPage />} />
                <Route path="protocol/feedback" element={<FeedbackPage />} />
                <Route path="key-topics" element={<ReviewKeyTopicsPage />} />
                <Route path="key-topics/a2a-and-mcp" element={<A2AandMCPPage />} />
                <Route path="key-topics/agent-discovery" element={<AgentDiscoveryPage />} />
                <Route path="key-topics/enterprise-ready" element={<EnterpriseReadyPage />} />
                <Route path="key-topics/push-notifications" element={<PushNotificationsPage />} />
                <Route path="resources" element={<ResourcesPage />} />
                <Route path="implementations" element={<ImplementationsPage />} />
              </Route>
            </Routes>
          </main>
          <ConditionalFooter />
        </div>
      </SearchProvider>
    </Router>
  );
}

export default App;