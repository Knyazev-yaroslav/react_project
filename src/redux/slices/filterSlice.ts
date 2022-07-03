import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export interface IFilterSlice {
  searchValue: string;
  currentPage: number;
  orderValue: boolean;
  titleSort: boolean;
}

// type TSearchParams = {
//   search: string;
//   title: string;
//   currentPage: number;
// };

// type TGoodsItem = {
//   title: string;
//   phone: string;
//   publicated: boolean;
//   price: string;
//   category: string;
//   description: string;
//   location: string;
//   id: string;
//   date: string;
// };

const initialState: IFilterSlice = {
  searchValue: '',
  currentPage: 1,
  orderValue: true,
  titleSort: false,
};

// export const fetchGoods = createAsyncThunk<TGoodsItem[], TSearchParams>(
//   'pizza/fetchGoodsStatus',
//   async (params) => {
//     const { title, search, currentPage } = params;
//     const { data } = await axios.get<TGoodsItem[]>(
//       `https://62bf109bbe8ba3a10d630620.mockapi.io/goods?&page=${currentPage}&limit=8&${search}&${title}`
//     );
//     return data;
//   }
// );

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
