import React, { FC } from 'react';
import style from './Button.module.scss';
import button_plus from '../../assets/images/button_plus.svg';

type TButton = {
  text: string;
};

const Button: FC<TButton> = ({ text }) => {
  return (
    <button className={style.btn} type="button">
      <p>{text}</p>
      <img src={button_plus} alt="plus" />
    </button>
  );
};

export default Button;
