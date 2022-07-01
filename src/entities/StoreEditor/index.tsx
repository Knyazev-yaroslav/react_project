import React from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map } from 'react-yandex-maps';
// import Map from './Map'
import style from './StoreEditor.module.scss';
import arrow_left_svg from '../../assets/images/arrow_left.svg';
import Button from '../../components/Button';

const StoreEditor = () => {
  return (
    <div className={style.store_editor}>
      <Link to="/" className={style.get_back}>
        <img src={arrow_left_svg} alt="arrow_left" />
        <p>Вернуться назад</p>
      </Link>
      <div className={style.save_item}>
        <div className={style.store_editor_container}>
          <p>Чепчик</p>
          <Button text="Сохранить" />
        </div>
      </div>
      <div>
        <div className={style.edit_block}>
          <div className={style.store_editor_container}>
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
              <input
                type="tel"
                placeholder="Ваш тел. номер"
                // pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                maxLength={17}
              />
            </div>
            <div className={style.item_description}>
              <p>Описание</p>
              <textarea placeholder="Введите текст (до 3000 символов)" maxLength={3000} />
            </div>
            <div className={style.item_photo}>
              <p>Фотография</p>
              <input id="file_upload" name="myFile" type="file" placeholder="Выбрать файл" />
            </div>
            <div className={style.item_location}>
              <p>Местоположение</p>
              <input type="text" placeholder="Введите адрес" />
              <YMaps>
                <div className={style.map}>
                  <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </div>
              </YMaps>
              {/* <Map /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreEditor;
