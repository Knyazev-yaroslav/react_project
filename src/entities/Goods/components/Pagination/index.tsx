import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';
import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import { selectFilter, setCurrentPage } from '../../../../redux/slices/filterSlice';

const Pagination: FC = () => {
  const { currentPage } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={8}
      pageCount={6}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
