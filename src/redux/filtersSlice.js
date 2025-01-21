import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    name: '', 
  },
  selectors: {
selectFilter:(state) => state.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload; 
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
export const { selectFilter } = filtersSlice.selectors;