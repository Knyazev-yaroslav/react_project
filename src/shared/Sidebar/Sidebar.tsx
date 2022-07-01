import React from 'react';
import style from './Sidebar.module.scss';
import admin_svg from '../../assets/images/admin_menu.svg';
import admin_menu_book from '../../assets/images/admin_menu_book.svg';
import admin_menu_exit from '../../assets/images/admin_menu_exit.svg';

const Sidebar = () => {
  return (
    <div className={style.sidebar_menu}>
      <div className={style.user_block}>
        <div className={style.super_admin}>
          <img src={admin_svg} alt="admin_svg" />
          <div>
            <h1>Super admin</h1>
            <p>Админ-меню</p>
          </div>
        </div>
      </div>
      <div className={style.sidebar_annonce}>
        <div className={style.sidebar_annonce__text}>
          <img src={admin_menu_book} alt="book" /> <p>Объявления</p>
        </div>
      </div>
      <div className={style.sidebar_exit}>
        <div className={style.sidebar_exit__text}>
          <img src={admin_menu_exit} alt="exit" /> <p>Выход</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
