import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import './App.css';
import MainPage from './pages/MainPage';
import BlogThreePage from './pages/BlogThreePage';
import PetmilyPage from 'pages/PetmilyPage';
import WebOSPage from 'pages/WebOSPage';
import PHMPage from 'pages/PHMPage';
import OffchatPage from 'pages/OffchatPage';
import UnityGamePage from 'pages/UnityGamePage';
import { Helmet } from 'react-helmet-async';
import React from 'react';

function App() {
  return (
    <>
      <Helmet>
        <title>기우제는 실패하지 않는다</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogthree" element={<BlogThreePage />} />
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
