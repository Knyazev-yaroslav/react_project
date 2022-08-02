import React, { FC, useEffect, useRef, useState } from 'react';
import style from './GoodsBlock.module.scss';
import PopupMenu from './popupMenu';

export type TGoodContent = {
  title: string;
  category: string;
  date: string;
  publicated: boolean;
  id: string;
  price: string;
  description: string;
  address: string;
  phone: string;
};

type TGoodsBlock = {
  goodContent: TGoodContent;
  onDelete: () => void;
};

type TPopupClick = MouseEvent & {
  path: Node[];
};

const GoodsBlock: FC<TGoodsBlock> = ({ goodContent, onDelete }) => {
  const [popupOpen, setPopuppOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { title, category, date, publicated, id, price, description, address, phone } = goodContent;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const myEvent = event as TPopupClick;
      if (popupRef.current && !myEvent.path.includes(popupRef.current)) {
        setPopuppOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const goodsObj = { title, category, date, publicated, id, price, description, address, phone };
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
                {popupOpen && <PopupMenu onDelete={onDelete} goodsObj={goodsObj} />}
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoodsBlock;
