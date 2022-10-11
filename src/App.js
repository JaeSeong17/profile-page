import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import MainPage from './pages/MainPage';
import PetmilyPage from 'pages/PetmilyPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/petmily" element={<PetmilyPage />} />
      </Routes>
    </>
  );
}

export default App;
