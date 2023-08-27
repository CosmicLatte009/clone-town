import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import Section3 from './page/main/Section3';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
