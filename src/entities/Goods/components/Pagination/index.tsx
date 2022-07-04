import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import style from './Pagination.module.scss';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux_hooks';
import { selectFilter, setCurrentPage, setDataSize } from '../../../../redux/slices/filterSlice';

const Pagination: FC = () => {
  const { currentPage, dataSize } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const arrayLength = async () => {
    const { data } = await axios.get(`https://62bf109bbe8ba3a10d630620.mockapi.io/goods`);
    dispatch(setDataSize(data.length));
  };
  arrayLength();
  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={Math.ceil(dataSize / 8)}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
