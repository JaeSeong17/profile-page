import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
