import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface IFilterSlice {
  searchValue: string;
  currentPage: number;
}

const initialState: IFilterSlice = {
  searchValue: '',
  currentPage: 1,
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
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const { setSearchValue, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
