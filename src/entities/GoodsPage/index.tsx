import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import style from './Goods.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks';

import GoodsHeader from './components/GoodsHeader';
import Search from './components/Search';
import Categories from './components/Categories';
import GoodsBlock from './components/GoodsBlock';
import Pagination from './components/Pagination';
import { selectFilter } from '../../redux/slices/filter/selectors';
import { fetchGoods } from '../../redux/slices/good/asyncActions';
import { selectGoodData } from '../../redux/slices/good/selectors';

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
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector(selectGoodData);
  const { currentPage, debouncedSearchValue, orderValue, titleSort } = useAppSelector(selectFilter);

  const getGoods = async () => {
    const search = debouncedSearchValue ? `title=${debouncedSearchValue}` : '';
    const order = orderValue ? 'desc' : 'asc';
    const title = titleSort ? `sortBy=title&order=${order}` : '';

    dispatch(fetchGoods({ search, title, currentPage }));
  };

  useEffect(() => {
    getGoods();
  }, [currentPage, orderValue, debouncedSearchValue]);

  const goods = items.map((goodContent: TGoodObj) => {
    return <GoodsBlock key={goodContent.id} goodContent={goodContent} onDelete={getGoods} />;
  });
  return (
    <div className={style.goods_page}>
      <GoodsHeader />
      <div className={style.goods_search_pagination_block}>
        <Search />
        <Pagination />
      </div>
      <Categories />
      {status === 'error' ? (
        <div className={style.good_error_info}>
          <h2>Произошла ошибка 😢</h2>
          <p>Не удалось получить товары, попробуйте позже</p>
        </div>
      ) : (
        goods
      )}
    </div>
  );
};

export default Goods;
