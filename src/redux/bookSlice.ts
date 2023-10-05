import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '../api/api';

interface BooksState {
  data: any[]; // Define the data structure according to your API response
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  data: [],
  loading: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchDataStart: state => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = booksSlice.actions;

export const fetchBooksData = () => async (dispatch:any) => {
  dispatch(fetchDataStart());
  try {
    const data = await fetchBooks();
    dispatch(fetchDataSuccess(data));
  } catch (error:any) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default booksSlice.reducer;
 