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
  price: string;
  description: string;
  address: string;
  phone: string;
  onDelete: () => void;
};

type TPopupClick = MouseEvent & {
  path: Node[];
};

const GoodsBlock: FC<TGoodsBlock> = ({
  title,
  category,
  date,
  publicated,
  id,
  price,
  description,
  address,
  phone,
  onDelete,
}) => {
  const [popupOpen, setPopuppOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const axiosRequestType = 'put';
  useEffect(() => {
    // Приучайся любые функции выносить в отдельные файлы. Если это общая какая-то утилка, которая нужна не только
    // этому компоненту, то должна быть где-то наверху общая папка helpers или utils, в ней функции, которые
    // друг с другом не связаны особо, должны лежать в РАЗНЫХ файликах. Поначалу многие делают ошибку, что
    // скидывают в один общий файл вагон разных функций, это быстро превращается в помойку. Исключения - как раз когда есть у функции
    // какие-то вспомогательные функции, которые использует только она (первая ф-я). Тогда их можно внутри этого файла юзать,
    // никуда не экспортируя.

    // Если же у тебя есть функции, которые относятся к конкретному компоненту, то принцип похожий: рядом где-то должна лежать
    // папка с хэдперами/утилками

    // Нужно стараться максимально отделить логику от отображения

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

  // старайся соблютать семантику именования переменных/функций
  // handleDelete, к примеру, так как если handleOutsideClick

  // Плюс в целом загони все это дело в редакс, а не в локальный стейт. В том числе запрос в thunk можешь сделать
  const onClickDelete = async () => {
    await axios.delete(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods/${id}`);
    onDelete();
  };
  const goodsObj = { title, category, date, publicated, id, price, description, address, phone };
  return (
    <div className={style.goods_items}>
      <div className={style.goods_single_item}>
        <ul>
          <li className={style.item_title}>{title}</li>
          <li className={style.item_category}>{category}</li>
          <li className={style.item_date}>{date}</li>
          <li className={style.item_publicated}>{publicated ? 'Да' : 'Нет'}</li>
          {/* Блок с кнопками вынести бы в отдельный компонент. То есть кнопку с тремя кнопками оставить здесь, она у тебя будет
           менять статус модального окна с действиями, а само окно вынести в отдельный компонент и юзать его тот.
           Если не охота прокидывать пропсы так далеко, может как раз попробовать контекстом обернуть на уровне
           GoodsPage. Но в целом, как раз когда на 2, максимум 3 уровня уходят пропсы - норм, дальше - лучше
           контекст или стор использовать, в зависимости от архитектуры и общих правил в рамках проекта. */}
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
                      {/* подумай над тем, как семантику роутов соблюсти: понятно, что ты одну и ту же верстку
                      юзаешь для создания/редактирования, и это правильно, но не очень хорошо, что
                      на странице редактирование в урле create */}
                      <Link
                        to="/create"
                        state={{ goodsObj, axiosRequestType }}
                        className={style.check_button}>
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
