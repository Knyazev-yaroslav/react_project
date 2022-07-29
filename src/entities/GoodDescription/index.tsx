import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import style from './GoodDescription.module.scss';
import arrow_left_svg from '../../assets/images/arrow_left.svg';

const GoodDescription: FC = () => {
  // Лучше сразу создать интерфейс для такого стейта
  const [good, setGood] = useState<{
    description: string;
    title: string;
    price: number;
    phone: string;
    category: string;
    publicated: boolean;
    date: string;
    address: string;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Все та же история, что и с другими хэндлерами - лучше описывать отдельно, причем сервисные штуки отдельно ото всех
    // функций (services / api и тд, на вкус и цвет)
    const fetchGood = async () => {
      try {
        const { data } = await axios.get(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/${id}`);
        setGood(data);
      } catch (error) {
        alert('Ошибка при получении товара!');
        navigate('/');
      }
    };
    fetchGood();
  }, []);

  if (!good) {
    return <div className={style.container}>Загрузка...</div>;
  }

  return (
    <div className={style.container}>
      <Link to="/" className={style.get_back}>
        <img src={arrow_left_svg} alt="arrow_left" />
        <p>Вернуться назад</p>
      </Link>
      <h2>{good.title}</h2>
      <h4>Категория товара: {good.category}</h4>
      <h4>Телефон продавца: +7 {good.phone}</h4>
      <h4>Цена товара: {good.price} ₽</h4>
      <h4>Дата публикации: {good.date}</h4>
      <h4>Улица, на которой находится товар: {good.address}</h4>
      <p>
        Описание товара: <br />
        {good.description}
      </p>
    </div>
  );
};

export default GoodDescription;
