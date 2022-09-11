import React, { Dispatch, FC, SetStateAction } from 'react';
import useDebounce from '../../../../hooks/useDebounce';
import style from '../../CreateAdvertisement.module.scss';
import Map from './Map';

type TAddressInput = {
  addressMap: string;
  setAddressMap: Dispatch<SetStateAction<string>>;
};

const AddressInput: FC<TAddressInput> = ({ addressMap, setAddressMap }) => {
  const debouncedAddress = useDebounce(addressMap, 500);

  return (
    <div className={style.item_location}>
      <p>Местоположение</p>
      <input
        required
        type="text"
        placeholder="Введите адрес"
        value={addressMap}
        onChange={(event) => setAddressMap(event.target.value)}
      />
      <Map address={debouncedAddress} />
    </div>
  );
};

export default AddressInput;
