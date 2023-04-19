import React, { useEffect } from 'react';
import './style/rest.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import cl from './style/app.module.scss'
import TodoTask from 'pages/todo-task';
import Home from 'pages/home';
import todoList from 'shared/libs/todos/todos.json'
import { useAppDispatch, useAppSelector } from './hooks/useStore';
import { setTodo } from 'shared/store/todos/todoSlice';
import LinkPrime from 'shared/UI/links/link-prime/LinkPrime';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {  
    let storageTodo;
    const isStorageEmpty = localStorage.getItem('todos')
    if (!isStorageEmpty) {
      localStorage.setItem('todos', JSON.stringify(todoList))
      storageTodo = todoList
    } else {
      storageTodo = JSON.parse(isStorageEmpty)
    }
    dispatch(setTodo(storageTodo))
  }, [])
  
  return (
    <BrowserRouter>
      <div className={cl.app}>
        <header>
          <LinkPrime to={'/'}>Home</LinkPrime>
          <LinkPrime to={'/task'}>Some task</LinkPrime>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/task' element={<TodoTask />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
