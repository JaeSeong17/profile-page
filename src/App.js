import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
