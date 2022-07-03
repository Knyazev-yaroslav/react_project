import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Goods.module.scss';
import { useAppSelector } from '../../hooks/redux_hooks';

import GoodsHeader from './components/GoodsHeader';
import Search from './components/Search';
import Paginaton from './components/Pagination';
import Categories from './components/Categories';
import GoodsBlock from './components/GoodsBlock';
import { selectFilter } from '../../redux/slices/filterSlice';
import useDebounce from '../../hooks/useDebounce';

const Goods = () => {
  const [items, setItems] = useState([]);
  const { currentPage, searchValue, orderValue, titleSort } = useAppSelector(selectFilter);
  const debouncedSearch = useDebounce(searchValue, 500);

  const search = debouncedSearch ? `title=${debouncedSearch}` : '';
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
  }, [currentPage, debouncedSearch, orderValue]);

  const goods = items.map((obj: any) => {
    return (
      <GoodsBlock
        key={`${obj.id}_${obj.name}`}
        title={obj.title}
        category={obj.category}
        date={obj.date}
        publicated={obj.publicated}
        id={obj.id}
        onDelete={fetchGoods}
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