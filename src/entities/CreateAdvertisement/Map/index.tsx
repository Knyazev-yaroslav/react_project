import React, { useEffect, useRef, useState } from 'react';
import { YMaps, Map as YMap, SearchControl } from 'react-yandex-maps';
import style from './Map.module.scss';

const Map = ({ address }: { address: string }) => {
  const searchRef = useRef(null) as any;
  useEffect(() => {
    if (address && searchRef.current) {
      searchRef.current.search(address);
    }
  }, [address]);

  return (
    <YMaps query={{ lang: 'ru_RU', apikey: process.env.REACT_APP_YANDEX_API_KEY }}>
      <YMap className={style.map} defaultState={{ center: [56.19, 44.0], zoom: 9 }}>
        <SearchControl state={{ request: address }} instanceRef={searchRef} />
      </YMap>
    </YMaps>
  );
};

export default Map;
