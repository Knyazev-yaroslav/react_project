import React from 'react';
import style from './Categories.module.scss';
import arrow_up from '../../../../assets/images/title_arrow_up.svg';
import arrow_down from '../../../../assets/images/title_arrow_down.svg';

const Categories = () => {
  return (
    <div className={style.categories}>
      <ul>
        <li className={style.title_sort}>
          <p>Название объявления</p>
          <div>
            <img className={style.arrow_up} src={arrow_up} alt="arrow up" />
            <img className={style.arow_down} src={arrow_down} alt="arrow down" />
          </div>
        </li>
        <li>Категория</li>
        <li>Дата публикации</li>
        <li>Публикация</li>
      </ul>
    </div>
  );
};

export default Categories;
