import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import MainPage from './pages/MainPage';
import PetmilyPage from 'pages/PetmilyPage';
import WebOSPage from 'pages/WebOSPage';
import PHMPage from 'pages/PHMPage';
import OffchatPage from 'pages/OffchatPage';
import UnityGamePage from 'pages/UnityGamePage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/petmily" element={<PetmilyPage />} />
        <Route path="/webos" element={<WebOSPage />} />
        <Route path="/phm" element={<PHMPage />} />
        <Route path="/offchat" element={<OffchatPage />} />
        <Route path="/unitygame" element={<UnityGamePage />} />
      </Routes>
    </>
  );
}

export default App;
