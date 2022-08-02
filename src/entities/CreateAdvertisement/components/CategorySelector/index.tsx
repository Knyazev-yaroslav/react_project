import React, { ChangeEvent, FC } from 'react';
import style from '../../CreateAdvertisement.module.scss';

type TCategorySelector = {
  goodCategory: string;
  onChangeSelector: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelector: FC<TCategorySelector> = ({ goodCategory, onChangeSelector }) => {
  return (
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
  );
};

export default CategorySelector;
