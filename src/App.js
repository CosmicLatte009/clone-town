import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/about/AboutPage';
import ServicePage from './page/service/ServicePage';
import PortfolioPage from './page/portfolioPage/PortfolioPage';
import RequestPage from './page/contact/RequestPage';
import ApplyPage from './page/contact/ApplyPage';
import Nav from './page/nav/Nav';

import FixedButton from './components/FixedButton';
import MobileFixedButton from './components/MobileFixedButton';
import Footer from './components/Footer';

import StoryNoticePage from './page/story/story-notice/StoryNoticePage';
import StoryLetterPage from './page/story/story-letter/StoryLetterPage';
import StoryStudyPage from './page/story/story-study/StoryStudyPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <FixedButton />
        <MobileFixedButton />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/story-notice" element={<StoryNoticePage />} />
          <Route path="/story-letter" element={<StoryLetterPage />} />
          <Route path="/story-study" element={<StoryStudyPage />} />
          <Route path="/contact-request" element={<RequestPage />} />
          <Route path="/contact-apply" element={<ApplyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
