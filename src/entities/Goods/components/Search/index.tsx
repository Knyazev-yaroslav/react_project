import React, { FC } from 'react';
import style from './Search.module.scss';
import search_svg from '../../../../assets/images/search.svg';
import close_svg from '../../../../assets/images/close_icon.svg';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux_hooks';
import { selectFilter, setSearchValue } from '../../../../redux/slices/filterSlice';

const Search: FC = () => {
  const { searchValue } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  return (
    <div className={style.search}>
      <input
        value={searchValue}
        onChange={(event) => {
          dispatch(setSearchValue(event.target.value));
        }}
        className={style.input}
        placeholder="Найти объявление"
      />
      {searchValue ? (
        <img
          onClick={() => dispatch(setSearchValue(''))}
          className={style.icon_close}
          src={close_svg}
          alt="close svg"
        />
      ) : (
        <img className={style.icon} src={search_svg} alt="search svg" />
      )}
    </div>
  );
};

export default Search;
