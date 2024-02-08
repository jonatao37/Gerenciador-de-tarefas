import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Slices.jsx';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});