import React, { useEffect } from 'react';
import './style/rest.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import cl from './style/app.module.scss'
import TodoTask from 'pages/todo-task';
import Home from 'pages/home';
import todoList from 'shared/libs/todos/todos.json'
import { setTodo } from 'shared/store/todos';
import LinkPrime from 'shared/UI/links/link-prime';
import { useAppDispatch } from 'app/hooks/useStore';
import CreateTask from 'pages/create-task/index';
import EditTask from 'pages/edit-task';

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
          <LinkPrime to={'/create'}>Create task</LinkPrime>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/task/:id' element={<TodoTask />} />
            <Route path='/create' element={<CreateTask />} />
            <Route path='/edit/:id' element={<EditTask />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
