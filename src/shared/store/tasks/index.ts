import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import ITask from 'shared/types/ITask';

export interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: []
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload)
    },
    deleteTasksById: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(tasks => tasks.id !== action.payload)
    },
    editTasks: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex(tasks => tasks.id === action.payload.id)
      if (index !== -1) {
        state.tasks[index] = action.payload
      }
    }
  }
});

export const selectTasks = (state: RootState) => state.tasks.tasks;

export const { setTasks, addTask, deleteTasksById, editTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
