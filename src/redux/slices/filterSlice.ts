import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IFilterSlice {
  searchValue: string;
  currentPage: number;
  orderValue: boolean;
  titleSort: boolean;
}

const initialState: IFilterSlice = {
  searchValue: '',
  currentPage: 1,
  orderValue: true,
  titleSort: false,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
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
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setSearchValue, setCurrentPage, setOrderValue, setTitleSort } = filterSlice.actions;

export default filterSlice.reducer;
