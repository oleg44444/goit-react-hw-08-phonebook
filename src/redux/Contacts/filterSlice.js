import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilter = state => state.filter.filter;
