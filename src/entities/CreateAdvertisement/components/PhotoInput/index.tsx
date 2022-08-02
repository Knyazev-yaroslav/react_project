import React from 'react';
import style from '../../CreateAdvertisement.module.scss';

const PhotoInput = () => {
  return (
    <div className={style.item_photo}>
      <p>Фотография</p>
      <input id="file_upload" name="myFile" type="file" placeholder="Выбрать файл" />
    </div>
  );
};

export default PhotoInput;
