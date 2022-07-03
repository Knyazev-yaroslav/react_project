import React, { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './GoodsBlock.module.scss';
import check_svg from '../../../../assets/images/check.svg';
import edit_svg from '../../../../assets/images/edit.svg';
import delete_svg from '../../../../assets/images/delete.svg';

type TGoodsBlock = {
  title: string;
  category: string;
  date: string;
  publicated: boolean;
  id: string;
  onDelete: () => void;
};

type TPopupClick = MouseEvent & {
  path: Node[];
};

const GoodsBlock: FC<TGoodsBlock> = ({ title, category, date, publicated, id, onDelete }) => {
  const [popupOpen, setPopuppOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const myEvent = event as TPopupClick;

      if (popupRef.current && !myEvent.path.includes(popupRef.current)) {
        setPopuppOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const onClickDelete = async () => {
    await axios.delete(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/${id}`);
    onDelete();
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
              <div ref={popupRef} className={style.popup}>
                {popupOpen && (
                  <div className={style.popup__menu}>
                    <ul>
                      <Link to={`/good/${id}`} className={style.check_button}>
                        <li>
                          <img src={check_svg} alt="eye" />
                          <p>Посмотреть</p>
                        </li>
                      </Link>
                      <li>
                        <img src={edit_svg} alt="pen" />
                        <p>Редактировать</p>
                      </li>
                      <li onClick={onClickDelete}>
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
