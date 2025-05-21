import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import Week1Page from './pages/Week1Page';
import Week2Page from './pages/Week2Page';
import Week3Page from './pages/Week3Page';
import Week4Page from './pages/Week4Page';
import EnglishLearningPage from './pages/EnglishLearningPage';
import ConsistencyGuidePage from './pages/ConsistencyGuidePage';
import GettingStartedPage from './pages/GettingStartedPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/week1" element={<Week1Page />} />
          <Route path="/week2" element={<Week2Page />} />
          <Route path="/week3" element={<Week3Page />} />
          <Route path="/week4" element={<Week4Page />} />
          <Route path="/english" element={<EnglishLearningPage />} />
          <Route path="/consistency" element={<ConsistencyGuidePage />} />
          <Route path="/getting-started" element={<GettingStartedPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
