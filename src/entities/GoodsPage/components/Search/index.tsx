import React, { FC, useEffect, useState } from 'react';
import style from './Search.module.scss';
import search_svg from '../../../../assets/images/search.svg';
import close_svg from '../../../../assets/images/close_icon.svg';
import { useAppDispatch } from '../../../../hooks/redux_hooks';
import { setDebouncedSearchValue } from '../../../../redux/slices/filterSlice';
import useDebounce from '../../../../hooks/useDebounce';

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, 500);
  useEffect(() => {
    dispatch(setDebouncedSearchValue(debouncedValue));
  }, [debouncedValue]);
  return (
    <div className={style.search}>
      <input
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className={style.input}
        placeholder="Найти объявление"
      />
      {searchValue ? (
        <img
          onClick={() => setSearchValue('')}
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
