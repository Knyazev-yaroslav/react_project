import React from 'react';
import style from './Header.module.scss';
import stiker_logo from '../../assets/images/sticker_logo.svg';
import profile_pic from '../../assets/images/profile_pic.svg';

const Header = () => {
  return (
    <div className={style.page_header}>
      <div className={style.container}>
        <div className={style.header_menu}>
          <div className={style.sticker_logo}>
            <img src={stiker_logo} alt="sticker_logo" />
            СТИКЕР
          </div>
          <div className={style.user_profile}>
            <img src={profile_pic} alt="profile_pic" />
            Профиль
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
