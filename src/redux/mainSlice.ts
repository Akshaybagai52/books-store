import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    booksList: [],
    searchResults: {},
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = state.list.filter((book:any) =>
              book.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        updateUserInfo: (state, action) => {
            state.userInformation = action.payload;
        },
    },
});
export const { setSearchResults, updateUserInfo } = bookSlice.actions;

export default bookSlice.reducer; 