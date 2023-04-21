import React, { useEffect } from 'react';
import './style/rest.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import cl from 'app/style/app.module.scss'
import TodoTask from 'pages/todo-task';
import Home from 'pages/home';
import { setTasks } from 'shared/store/tasks';
import LinkPrime from 'shared/UI/links/link-prime';
import { useAppDispatch } from 'app/hooks/useStore';
import CreateTask from 'pages/create-task/index';
import EditTask from 'pages/edit-task';
import TaskService from 'entities/todo-task/api';
import useFetching from 'shared/hooks/fetching';
import Loader from 'shared/UI/loader';

function App() {
  const dispatch = useAppDispatch();

  const [fetchTasks, isTasksLoading, fetchTasksError] = useFetching(async () => {
    const fetchedTasks = await TaskService.getAllTasks();    
    dispatch(setTasks(fetchedTasks))
  })

  useEffect(() => {
    fetchTasks();
  }, []);
  
  if (isTasksLoading) return (<Loader/>)

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
