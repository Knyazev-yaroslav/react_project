import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGoodObject, TSearchGoodParams } from './types';

export const fetchGoods = createAsyncThunk<TGoodObject[], TSearchGoodParams>(
  'good/fetchGoodStatus',
  async (params) => {
    const { title, search, currentPage } = params;
    const { data } = await axios.get(
      `https://62bf109bbe8ba3a10d630620.mockapi.io/goods?&page=${currentPage}&limit=8&${search}&${title}`
    );
    return data;
  }
);
