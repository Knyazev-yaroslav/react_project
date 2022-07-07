import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Map from './Map';
import style from './CreateAdvertisement.module.scss';
import arrow_left_svg from '../../assets/images/arrow_left.svg';

import useDebounce from '../../hooks/useDebounce';

type TState = {
  goodsObj: {
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
  axiosRequestType: string;
};

const CreateAdvertisement: FC = () => {
  const location = useLocation();
  const objState = location.state as TState;
  const { title, phone, price, category, description, address, id } = objState.goodsObj;

  const { axiosRequestType } = objState;
  const [addressMap, setAddressMap] = useState(address);
  const [goodTitle, setGoodTitle] = useState(title);
  const [goodPrice, setGoodPrice] = useState(price);
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [goodDescription, setGoodDescription] = useState(description);
  const [goodCategory, setGoodCategory] = useState(category);
  const debouncedAddress = useDebounce(addressMap, 750);
  const onChangeSelector = (event: ChangeEvent<HTMLSelectElement>) =>
    setGoodCategory(event.target.value);

  new Date().toISOString().slice(0, 10);
  const publicateDate = new Date().toISOString().slice(0, 10);
  const navigate = useNavigate();
  const goodObj = {
    title: goodTitle,
    phone: phoneNumber,
    publicated: true,
    price: goodPrice,
    category: goodCategory,
    description: goodDescription,
    address: addressMap,
    id,
    date: publicateDate,
  };

  // const axiosPut = async () => {
  //   await axios.put(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/${id}`, goodObj);
  // };
  // const axiosPost = async () => {
  //   await axios.post(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/`, goodObj);
  // };

  // const currentRequest = () => (axiosRequestType === 'put' ? axiosPut() : axiosPost());
  // console.log(currentRequest());

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (axiosRequestType === 'put') {
      await axios.put(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/${id}`, goodObj);
    } else await axios.post(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/`, goodObj);
    navigate('/');
  };

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
                  defaultValue={goodCategory}
                  className={style.selector}>
                  <option value="Автомобили">Автомобили</option>
                  <option value="Недвижимость">Недвижимость</option>
                  <option value="Одежда">Одежда</option>
                  <option value="Книги">Книги</option>
                  <option value="Компьютерная переферия">Компьютерная переферия</option>
                  <option value="Домашние животные">Домашние животные</option>
                  <option value="Аксессуары">Аксессуары</option>
                  <option value="Растения">Растения</option>
                  <option value="Услуги">Услуги</option>
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
                  type="text"
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
                  value={addressMap}
                  onChange={(event) => setAddressMap(event.target.value)}
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
