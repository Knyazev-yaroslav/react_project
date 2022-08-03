import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSlice } from './types';

const initialState: IFilterSlice = {
  debouncedSearchValue: '',
  currentPage: 1,
  orderValue: true,
  titleSort: false,
  dataSize: 0,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setDebouncedSearchValue(state, action: PayloadAction<string>) {
      state.debouncedSearchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setOrderValue(state) {
      state.orderValue = !state.orderValue;
    },
    setTitleSort(state) {
      state.titleSort = true;
    },
    setDataSize(state, action: PayloadAction<number>) {
      state.dataSize = action.payload;
    },
  },
});

export const { setDebouncedSearchValue, setCurrentPage, setOrderValue, setTitleSort, setDataSize } =
  filterSlice.actions;

export default filterSlice.reducer;
