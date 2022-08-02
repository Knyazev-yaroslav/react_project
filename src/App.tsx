import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout/PageLayout';
import Goods from './entities/GoodsPage';
import CreateAdvertisement from './entities/CreateAdvertisement';
import GoodDescription from './entities/GoodDescription';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<Goods />} />
        <Route path="create" element={<CreateAdvertisement />} />
        <Route path="edit" element={<CreateAdvertisement />} />
        <Route path="good/:id" element={<GoodDescription />} />
      </Route>
    </Routes>
  );
};

export default App;
