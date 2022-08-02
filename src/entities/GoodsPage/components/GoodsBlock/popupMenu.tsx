import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import style from './GoodsBlock.module.scss';

import check_svg from '../../../../assets/images/check.svg';
import edit_svg from '../../../../assets/images/edit.svg';
import delete_svg from '../../../../assets/images/delete.svg';
import { TGoodContent } from '.';

type TPopupMenu = {
  goodsObj: TGoodContent;
  onDelete: () => void;
};

const PopupMenu: FC<TPopupMenu> = ({ goodsObj, onDelete }) => {
  const { id } = goodsObj;
  const axiosRequestType = 'put';
  const onClickDelete = async () => {
    await axios.delete(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/${id}`);
    onDelete();
  };
  return (
    <div className={style.popup__menu}>
      <ul>
        <Link to={`/good/${id}`} className={style.check_button}>
          <li>
            <img src={check_svg} alt="eye" />
            <p>Посмотреть</p>
          </li>
        </Link>
        <Link to="/edit" state={{ goodsObj, axiosRequestType }} className={style.check_button}>
          <li>
            <img src={edit_svg} alt="pen" />
            <p>Редактировать</p>
          </li>
        </Link>
        <li onClick={onClickDelete}>
          <img src={delete_svg} alt="trash" />
          <p>Удалить</p>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
