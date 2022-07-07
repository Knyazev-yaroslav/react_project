import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/redux_hooks';
import { selectFilter } from '../../../../redux/slices/filterSlice';
import Button from '../Button';
import style from './GoodsHeader.module.scss';

const GoodsHeader: FC = () => {
  const { dataSize } = useAppSelector(selectFilter);
  const goodsObj = {
    title: '',
    phone: '',
    publicated: '',
    price: '',
    category: 'Автомобиль',
    description: '',
    address: '',
    id: String(Date.now()),
    date: '',
    axiosRequestType: 'post',
  };

  return (
    <div className={style.goods_header}>
      <div className={style.goods_header__text}>
        <h1>Объявления</h1>
        <p>Всего: {dataSize}</p>
      </div>
      <Link state={{ goodsObj }} to="/create" className={style.link}>
        <Button text="Добавить" />
      </Link>
    </div>
  );
};

export default GoodsHeader;
