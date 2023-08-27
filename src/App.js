import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './page/HomePage';
import AboutPage from './page/about/AboutPage';
import ServicePage from './page/service/ServicePage';
import PortfolioPage from './page/portfolioPage/PortfolioPage';
import Nav from './page/nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
