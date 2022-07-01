import React from 'react';
import style from './GoodsBlock.module.scss';
import check_svg from '../../../../assets/images/check.svg';
import edit_svg from '../../../../assets/images/edit.svg';
import delete_svg from '../../../../assets/images/delete.svg';

const GoodsBlock = () => {
  return (
    <div className={style.goods_items}>
      <div className={style.goods_single_item}>
        <ul>
          <li className={style.item_title}>Чепчик</li>
          <li>Одежда</li>
          <li>12 апреля 2022</li>
          <li>Да</li>
          <li>
            <div className={style.popup}>
              <div className={style.popup__menu}>
                <ul>
                  <li>
                    <img src={check_svg} alt="eye" />
                    <p>Посмотреть</p>
                  </li>
                  <li>
                    <img src={edit_svg} alt="pen" />
                    <p>Редактировать</p>
                  </li>
                  <li>
                    <img src={delete_svg} alt="trash" />
                    <p>Удалить</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <img src={popup_svg} alt="popup" /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoodsBlock;
