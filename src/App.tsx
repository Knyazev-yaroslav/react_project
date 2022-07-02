import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout/PageLayout';
import Goods from './entities/Goods';
import StoreEditor from './entities/StoreEditor';
import GoodDescription from './entities/GoodDescription';

const App = () => {
  const now = new Date().toISOString().slice(0, 10);
  console.log(now);
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<Goods />} />
        <Route path="store" element={<StoreEditor />} />
        <Route path="good/:id" element={<GoodDescription />} />
      </Route>
    </Routes>
  );
};

export default App;
