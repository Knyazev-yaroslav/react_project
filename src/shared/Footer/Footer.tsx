import React from 'react';
import style from './Footer.module.scss';
import stiker_logo from '../../assets/images/sticker_logo.svg';

const Footer = () => {
  return (
    <div className={style.page_footer}>
      <div className={style.container}>
        <div className={style.footer_menu}>
          <div className={style.footer_left}>
            <div className={style.sticker_logo}>
              <img src={stiker_logo} alt="sticker_logo" />
              СТИКЕР
            </div>
            <div className={style.footer_text}>Доска объявлений</div>
          </div>
          <div className={(style.footer_rigth, style.footer_text)}>
            © ООО «Доска диджитал», 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
