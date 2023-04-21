import { configureStore, } from '@reduxjs/toolkit';
import tasksSlice from 'shared/store/tasks';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
