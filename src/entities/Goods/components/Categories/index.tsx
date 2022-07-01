import React from 'react';
import style from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={style.categories}>
      <ul>
        <li>Название объявления</li>
        <li>Категория</li>
        <li>Дата публикации</li>
        <li>Публикация</li>
      </ul>
    </div>
  );
};

export default Categories;
