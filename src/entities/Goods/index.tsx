import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Goods.module.scss';
import { useAppSelector } from '../../hooks/hooks';

import GoodsHeader from './components/GoodsHeader';
import Search from './components/Search';
import Paginaton from './components/Pagination';
import Categories from './components/Categories';
import GoodsBlock from './components/GoodsBlock';
import { selectFilter } from '../../redux/slices/filterSlice';

const Goods = () => {
  const [items, setItems] = useState([]);
  const { currentPage, searchValue } = useAppSelector(selectFilter);
  useEffect(() => {
    const search = searchValue ? `title=${searchValue}` : '';

    axios
      .get(
        `https://62bf109bbe8ba3a10d630620.mockapi.io/goods?${search}&page=${currentPage}&limit=8`
      )
      .then((res) => {
        setItems(res.data);
      });
  }, [currentPage, searchValue]);

  const goods = items.map((obj: any) => {
    return (
      <GoodsBlock
        key={`${obj.id}_${obj.name}`}
        title={obj.title}
        category={obj.category}
        date={obj.date}
        publicated={obj.publicated}
      />
    );
  });

  return (
    <div className={style.goods_page}>
      <GoodsHeader />
      <div className={style.goods_search_pagination_block}>
        <Search />
        <Paginaton />
      </div>
      <Categories />
      {goods}
    </div>
  );
};

export default Goods;
