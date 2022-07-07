import React, { FC } from 'react';
import style from './Categories.module.scss';
import arrow_up from '../../../../assets/images/title_arrow_up.svg';
import arrow_down from '../../../../assets/images/title_arrow_down.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux_hooks';
import { selectFilter, setOrderValue, setTitleSort } from '../../../../redux/slices/filterSlice';

const Categories: FC = () => {
  const dispatch = useAppDispatch();
  const { orderValue, titleSort } = useAppSelector(selectFilter);
  const onClickSort = () => {
    dispatch(setOrderValue());
    dispatch(setTitleSort());
  };
  return (
    <div className={style.categories}>
      <ul>
        <li
          onClick={() => onClickSort()}
          className={titleSort ? style.title_sort_active : style.title_sort}>
          <p>Название объявления</p>
          <div>
            <img
              className={orderValue ? style.arrow_up_active : style.arrow_up}
              src={arrow_up}
              alt="arrow up"
            />
            <img
              className={orderValue ? style.arrow_down : style.arrow_down_active}
              src={arrow_down}
              alt="arrow down"
            />
          </div>
        </li>
        <li className={style.passive_li}>Категория</li>
        <li className={style.passive_li}>Дата публикации</li>
        <li className={style.passive_li}>Публикация</li>
      </ul>
    </div>
  );
};

export default Categories;
