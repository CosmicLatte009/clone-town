import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/about/AboutPage';
import ServicePage from './page/service/ServicePage';
import Nav from './page/nav/Nav';
import FixedButton from './components/FixedButton';
import MobileFixedButton from './components/MobileFixedButton';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <FixedButton />
      <MobileFixedButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
