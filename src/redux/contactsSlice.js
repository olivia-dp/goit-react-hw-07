import { createSlice } from '@reduxjs/toolkit';
import { deleteThunkContact, fetchContacts } from './operations';


const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  isLoading: false,
  error: false,
  },
  selectors: {
    selectContacts: (state) => state.items,
  },
  reducers: {
    addContact: (state, action) => {
       state.items.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase (deleteThunkContact.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    })

  }
});

export default slice.reducer;

export const { addContact, deleteContact} = slice.actions;

export const { selectContacts } = slice.selectors;


