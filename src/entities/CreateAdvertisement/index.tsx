import React, { ChangeEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Map from './Map';
import style from './CreateAdvertisement.module.scss';
import arrow_left_svg from '../../assets/images/arrow_left.svg';

import useDebounce from '../../hooks/useDebounce';

const CreateAdvertisement = () => {
  const [address, setAddress] = useState('');
  const [goodTitle, setGoodTitle] = useState('');
  const [goodPrice, setGoodPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [goodDescription, setGoodDescription] = useState('');
  const [goodCategory, setGoodCategory] = useState('Автомобили');
  const debouncedAddress = useDebounce(address, 750);
  const onChangeSelector = (event: ChangeEvent<HTMLSelectElement>) =>
    setGoodCategory(event.target.value);

  const publicateDate = new Date().toISOString().slice(0, 10);
  const navigate = useNavigate();

  const goodObj = {
    title: goodTitle,
    phone: phoneNumber,
    publicated: true,
    price: goodPrice,
    category: goodCategory,
    description: goodDescription,
    location: address,
    id: String(Date.now()),
    date: publicateDate,
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    await axios.post(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/`, goodObj);
    navigate('/');
  };
  // onSubmit={onButtonClick}
  return (
    <div className={style.store_editor}>
      <Link to="/" className={style.get_back}>
        <img src={arrow_left_svg} alt="arrow_left" />
        <p>Вернуться назад</p>
      </Link>
      <form onSubmit={onSubmit}>
        <div className={style.save_item}>
          <div className={style.store_editor_container}>
            <p>{goodTitle}</p>
            <button className={style.btn} type="submit">
              <p>Сохранить</p>
            </button>
          </div>
        </div>
        <div>
          <div className={style.edit_block}>
            <div className={style.store_editor_container}>
              <div className={style.item_title}>
                <p>Название товара</p>
                <input
                  required
                  onChange={(event) => setGoodTitle(event.target.value)}
                  value={goodTitle}
                  type="text"
                  placeholder="Название"
                />
              </div>
              <div className={style.item_category}>
                <p>Категория</p>
                <select
                  onChange={onChangeSelector}
                  id="category_selector"
                  name="select_category"
                  className={style.selector}>
                  <option value="Автомобили">Автомобили</option>
                  <option value="Недвижимость">Недвижимость</option>
                  <option value="Одежда">Одежда</option>
                  <option value="Книги">Книги</option>
                  <option value="Компьютерная переферия">Компьютерная переферия</option>
                  <option value="Домашние животные">Домашние животные</option>
                  <option value="Аксессуары">Аксессуары</option>
                  <option value="Растения">Растения</option>
                </select>
              </div>
              <div className={style.item_price}>
                <p>Стоимость</p>
                <input
                  required
                  onChange={(event) => setGoodPrice(event.target.value)}
                  value={goodPrice}
                  type="text"
                  placeholder="Цена"
                />
              </div>
              <div className={style.phone_number}>
                <p>Телефон</p>
                <input
                  required
                  onChange={(event) => setPhoneNumber(String(event.target.value))}
                  value={phoneNumber}
                  type="tel"
                  placeholder="+7(9XX) XXX-XX-XX"
                  pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                  maxLength={17}
                />
              </div>
              <div className={style.item_description}>
                <p>Описание</p>
                <textarea
                  required
                  onChange={(event) => setGoodDescription(event.target.value)}
                  value={goodDescription}
                  placeholder="Введите текст (до 3000 символов)"
                  maxLength={3000}
                />
              </div>
              <div className={style.item_photo}>
                <p>Фотография</p>
                <input id="file_upload" name="myFile" type="file" placeholder="Выбрать файл" />
              </div>
              <div className={style.item_location}>
                <p>Местоположение</p>
                <input
                  required
                  type="text"
                  placeholder="Введите адрес"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
                <Map address={debouncedAddress} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAdvertisement;
