import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import StoryNoticePage from './page/story/story-notice/StoryNoticePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story-notice" element={<StoryNoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
