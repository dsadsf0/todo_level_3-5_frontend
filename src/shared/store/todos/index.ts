import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import ITodo from 'shared/types/ITodo';

export interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload)
    },
    deleteTodoById: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      if (index !== -1) {
        state.todos[index] = action.payload
      }
    }
  }
});

export const selectTodos = (state: RootState) => state.todo.todos;

export const { setTodo, addTodo, deleteTodoById, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
