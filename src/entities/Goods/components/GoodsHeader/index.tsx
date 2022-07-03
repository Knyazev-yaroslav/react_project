import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import style from './GoodsHeader.module.scss';

const GoodsHeader = () => {
  return (
    <div className={style.goods_header}>
      <div className={style.goods_header__text}>
        <h1>Объявления</h1>
        <p>Всего: 47</p>
      </div>
      <Link to="/create" className={style.link}>
        <Button text="Добавить" />
      </Link>
    </div>
  );
};

export default GoodsHeader;
