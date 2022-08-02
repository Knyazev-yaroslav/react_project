import React, { Dispatch, FC, SetStateAction } from 'react';
import style from '../../CreateAdvertisement.module.scss';

type TDescriptionInput = {
  goodDescription: string;
  setGoodDescription: Dispatch<SetStateAction<string>>;
};

const DescriptionInput: FC<TDescriptionInput> = ({ goodDescription, setGoodDescription }) => {
  return (
    <div className={style.item_description}>
      <p>Описание</p>
      <textarea
        required
        onChange={(event) => setGoodDescription(event.target.value)}
        value={goodDescription}
        placeholder="Введите текст (до 3000 символов)"
        maxLength={3000}
      />
    </div>
  );
};

export default DescriptionInput;
