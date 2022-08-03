import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGoods } from './asyncActions';
import { TGoodObject, Status, IGoodSliceState } from './types';

const initialState: IGoodSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const goodSlice = createSlice({
  name: 'good',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TGoodObject[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGoods.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.items = [];
      state.status = Status.ERROR;
    });
  },
});

export const { setItems } = goodSlice.actions;

export default goodSlice.reducer;
