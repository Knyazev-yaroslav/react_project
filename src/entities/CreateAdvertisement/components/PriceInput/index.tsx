import React, { Dispatch, FC, SetStateAction } from 'react';
import style from '../../CreateAdvertisement.module.scss';

type TPriceInput = {
  goodPrice: string;
  setGoodPrice: Dispatch<SetStateAction<string>>;
};

const PriceInput: FC<TPriceInput> = ({ goodPrice, setGoodPrice }) => {
  return (
    <div className={style.item_price}>
      <p>Стоимость</p>
      <input
        required
        onChange={(event) => setGoodPrice(event.target.value)}
        value={goodPrice}
        type="text"
        placeholder="Цена"
      />
    </div>
  );
};

export default PriceInput;
