import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout/PageLayout';
import Goods from './entities/Goods';
import StoreEditor from './entities/StoreEditor';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<Goods />} />
        <Route path="store" element={<StoreEditor />} />
      </Route>
    </Routes>
  );
};

export default App;
