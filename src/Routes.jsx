import React from 'react';
import {Routes, Route} from 'react-router-dom';
import DirectoryPage from './pages/DirectoryPage';
import Detail from './pages/Detail/Detail';
import Homepage from './pages/Homepage';

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/:category" element={<DirectoryPage />} />
      <Route path="/:category/search/:keyword" element={<DirectoryPage />} />
      <Route path="/:category/:id" element={<Detail />} />
    </Routes>
  );
}

export default ConfigRoutes; 