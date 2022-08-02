import React, { Dispatch, FC, SetStateAction } from 'react';
import style from '../../CreateAdvertisement.module.scss';

type TPhoneInput = {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
};

const PhoneInput: FC<TPhoneInput> = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <div className={style.phone_number}>
      <p>Телефон</p>
      <input
        required
        onChange={(event) => setPhoneNumber(String(event.target.value))}
        value={phoneNumber}
        type="text"
        placeholder="+7(9XX) XXX-XX-XX"
        pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
        maxLength={17}
      />
    </div>
  );
};

export default PhoneInput;
