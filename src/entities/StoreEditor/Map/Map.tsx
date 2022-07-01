import React from 'react';
import style from './Map.module.scss';

const Map = () => {
  return (
    <div className={style.map_first}>
      <a
        className={style.a_first}
        href="https://yandex.ru/maps/47/nizhny-novgorod/?utm_medium=mapframe&utm_source=maps">
        Нижний Новгород
      </a>
      <a
        className={style.a_second}
        href="https://yandex.ru/maps/47/nizhny-novgorod/?ll=44.032937%2C56.316728&utm_medium=mapframe&utm_source=maps&z=13">
        Яндекс-Карты — транспорт, навигация, поиск мест
      </a>
      <iframe
        title="map"
        src="https://yandex.ru/map-widget/v1/-/CCUNeDdq-A"
        width="560"
        height="400"
        frameBorder="1"
        allowFullScreen
        className={style.iframe}>
        {' '}
      </iframe>
    </div>
  );
};

export default Map;
