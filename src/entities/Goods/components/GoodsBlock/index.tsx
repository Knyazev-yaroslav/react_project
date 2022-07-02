import React, { FC, useState } from 'react';
import style from './GoodsBlock.module.scss';
import check_svg from '../../../../assets/images/check.svg';
import edit_svg from '../../../../assets/images/edit.svg';
import delete_svg from '../../../../assets/images/delete.svg';

type TGoodsBlock = {
  title: string;
  category: string;
  date: string;
  publicated: boolean;
};

const GoodsBlock: FC<TGoodsBlock> = ({ title, category, date, publicated }) => {
  const [popupOpen, setPopuppOpen] = useState(false);
  const popupSwitch = () => {
    setPopuppOpen(!popupOpen);
  };

  return (
    <div className={style.goods_items}>
      <div className={style.goods_single_item}>
        <ul>
          <li className={style.item_title}>{title}</li>
          <li className={style.item_category}>{category}</li>
          <li className={style.item_date}>{date}</li>
          <li className={style.item_publicated}>{publicated ? 'Да' : 'Нет'}</li>
          <li>
            <button type="button" onClick={() => setPopuppOpen(!popupOpen)}>
              <div className={style.popup}>
                {popupOpen && (
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
                )}
              </div>
            </button>
            {/* <img src={popup_svg} alt="popup" /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoodsBlock;
