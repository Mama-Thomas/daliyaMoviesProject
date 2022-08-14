import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail/Detail';
import Homepage from './pages/Homepage';

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
    </Routes>
  );
}

export default ConfigRoutes;