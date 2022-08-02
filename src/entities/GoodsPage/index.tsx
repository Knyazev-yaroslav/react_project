import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import style from './Goods.module.scss';
import { useAppSelector } from '../../hooks/redux_hooks';

import GoodsHeader from './components/GoodsHeader';
import Search from './components/Search';
import Categories from './components/Categories';
import GoodsBlock from './components/GoodsBlock';
import { selectFilter } from '../../redux/slices/filterSlice';
import useDebounce from '../../hooks/useDebounce';
import Pagination from './components/Pagination';

export type TGoodObj = {
  title: string;
  phone: string;
  publicated: boolean;
  price: string;
  category: string;
  description: string;
  address: string;
  id: string;
  date: string;
};

const Goods: FC = () => {
  const [items, setItems] = useState([]);
  const { currentPage, debouncedSearchValue, orderValue, titleSort } = useAppSelector(selectFilter);

  const search = debouncedSearchValue ? `title=${debouncedSearchValue}` : '';
  const order = orderValue ? 'desc' : 'asc';
  const title = titleSort ? `sortBy=title&order=${order}` : '';

  const fetchGoods = async () => {
    const { data } = await axios.get(
      `https://62bf109bbe8ba3a10d630620.mockapi.io/goods?&page=${currentPage}&limit=8&${search}&${title}`
    );
    setItems(data);
  };

  useEffect(() => {
    fetchGoods();
  }, [currentPage, orderValue, debouncedSearchValue]);

  const goods = items.map((goodContent: TGoodObj) => {
    return <GoodsBlock key={goodContent.id} goodContent={goodContent} onDelete={fetchGoods} />;
  });

  return (
    <div className={style.goods_page}>
      <GoodsHeader />
      <div className={style.goods_search_pagination_block}>
        <Search />
        <Pagination />
      </div>
      <Categories />
      {goods}
    </div>
  );
};

export default Goods;
