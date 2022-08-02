import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './CreateAdvertisement.module.scss';
import arrow_left_svg from '../../assets/images/arrow_left.svg';

import PhotoInput from './components/PhotoInput';
import PriceInput from './components/PriceInput';
import TitleInput from './components/TitleInput';
import CategorySelector from './components/CategorySelector';
import PhoneInput from './components/PhoneInput';
import DescriptionInput from './components/DescriptionInput';
import AddressInput from './components/AdressInput';

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
    address: addressMap,
    id,
    date: publicateDate,
  };

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
              <TitleInput goodTitle={goodTitle} setGoodTitle={setGoodTitle} />
              <CategorySelector goodCategory={goodCategory} onChangeSelector={onChangeSelector} />
              <PriceInput goodPrice={goodPrice} setGoodPrice={setGoodPrice} />
              <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
              <DescriptionInput
                goodDescription={goodDescription}
                setGoodDescription={setGoodDescription}
              />
              <PhotoInput />
              <AddressInput addressMap={addressMap} setAddressMap={setAddressMap} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAdvertisement;
