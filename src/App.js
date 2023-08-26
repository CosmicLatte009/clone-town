import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import ApplyPage from './contact/ApplyPage';

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
