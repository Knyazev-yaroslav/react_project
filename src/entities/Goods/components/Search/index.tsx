import React from 'react';
import style from './Search.module.scss';
import search_svg from '../../../../assets/images/search.svg';

const Search = () => {
  return (
    <div className={style.search}>
      <input className={style.input} placeholder="Найти объявление" />
      <img className={style.icon} src={search_svg} alt="search svg" />
    </div>
  );
};

export default Search;
