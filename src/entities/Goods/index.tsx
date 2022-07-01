import React from 'react';
import style from './Goods.module.scss';

import GoodsHeader from './components/GoodsHeader';
import Search from './components/Search';
import Paginaton from './components/Pagination';
import Categories from './components/Categories';
import GoodsBlock from './components/GoodsBlock';

const Goods = () => {
  return (
    <div className={style.goods_page}>
      <GoodsHeader />
      <div className={style.goods_search_pagination_block}>
        <Search />
        <Paginaton />
      </div>
      <Categories />
      <GoodsBlock />
      <GoodsBlock />
      <GoodsBlock />
      <GoodsBlock />
      <GoodsBlock />
      <GoodsBlock />
      <GoodsBlock />
      <GoodsBlock />
    </div>
  );
};

export default Goods;
