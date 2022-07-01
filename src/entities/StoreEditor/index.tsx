import React from 'react';
import { Link } from 'react-router-dom';
import style from './StoreEditor.module.scss';
import arrow_left_svg from '../../assets/images/arrow_left.svg';
import Button from '../../components/Button';

const StoreEditor = () => {
  return (
    <div>
      <Link to="/" className={style.get_back}>
        <img src={arrow_left_svg} alt="arrow_left" />
        <p>Вернуться назад</p>
      </Link>
      <div className={style.save_item}>
        <p>Чепчик</p>
        <Button text="Сохранить" />
      </div>
      <div>
        <div className={style.item_title}>
          <p>Название товара</p>
          <input type="text" placeholder="Название" />
        </div>
        <div className={style.item_category}>
          <p>Категория</p>
          <div>popup</div>
        </div>
        <div className={style.item_price}>
          <p>Стоимость</p>
          <input type="text" placeholder="Цена" />
        </div>
        <div className={style.phone_number}>
          <p>Телефон</p>
          <input type="tel" placeholder="Ваш тел. номер" />
        </div>
        <div className={style.item_description}>
          <p>Описание</p>
          <input type="text" placeholder="Введите текст (до 3000 символов)" />
        </div>
        <div className={style.item_photo}>
          <p>Фотография</p>
          <input name="myFile" type="file" />
        </div>
        <div className={style.item_location}>
          <p>Местоположение</p>
          <input type="text" placeholder="Введите адрес" />
        </div>
      </div>
    </div>
  );
};

export default StoreEditor;
