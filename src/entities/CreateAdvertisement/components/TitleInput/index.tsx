import React, { Dispatch, FC, SetStateAction } from 'react';
import style from '../../CreateAdvertisement.module.scss';

type TTitleInput = {
  goodTitle: string;
  setGoodTitle: Dispatch<SetStateAction<string>>;
};

const TitleInput: FC<TTitleInput> = ({ goodTitle, setGoodTitle }) => {
  return (
    <div className={style.item_title}>
      <p>Название товара</p>
      <input
        required
        onChange={(event) => setGoodTitle(event.target.value)}
        value={goodTitle}
        type="text"
        placeholder="Название"
      />
    </div>
  );
};

export default TitleInput;
