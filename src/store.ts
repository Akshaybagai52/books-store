import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './redux/bookSlice'; // Import your slice reducer
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

// Define RootState type for type checking
export type RootState = ReturnType<typeof store.getState>;

// Export typed hooks to be used in components
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = configureStore({
  reducer: {
    books: bookReducer, // Add your slice reducer here
    // ... other reducers if any
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
 