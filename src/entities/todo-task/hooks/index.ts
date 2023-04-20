import { useAppDispatch, useAppSelector } from "app/hooks/useStore";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo, deleteTodoById, editTodo, selectTodos } from "shared/store/todos";
import ITodo from "shared/types/ITodo";
import { TaskFilter } from "entities/todo-task/types/filter";

export const useToggleTaskComplete = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectTodos)

  return (task: ITodo) => {
    if (task) {
      const editedTask = structuredClone(task)
      const todoList = structuredClone(todos)
      editedTask.completed = !editedTask.completed
      dispatch(editTodo(editedTask))
      localStorage.setItem('todos', JSON.stringify(todoList.map(task => task.id === editedTask.id ? editedTask : task)))
    }
  }
}

export const useDeleteTask = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const todos = useAppSelector(selectTodos)

  return (task: ITodo) => {
    if (task) {
      const todoList = structuredClone(todos)
      dispatch(deleteTodoById(task.id))
      localStorage.setItem('todos', JSON.stringify(todoList.filter(todo => todo.id !== task.id)))
      navigate('/')
    }
  }
}

export const useEditTask = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const todos = useAppSelector(selectTodos)

  return (task: ITodo) => {
    if (task) {
      const editedTask = structuredClone(task)
      const todoList = structuredClone(todos)
      dispatch(editTodo(editedTask))
      localStorage.setItem('todos', JSON.stringify(todoList.map(task => task.id !== editedTask.id ? task : editedTask)))
      navigate(`/task/${task.id}`)
    }
  }
}

export const useCreateTask = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const todos = useAppSelector(selectTodos)

  return (task: {title: string, description: string}) => {
    if (task) {
      const newTask = structuredClone(task) as ITodo
      const todoList = structuredClone(todos)
      newTask.id = todoList[todoList.length -1].id + 1
      newTask.completed = false
      todoList.push(newTask)
      dispatch(addTodo(newTask))
      localStorage.setItem('todos', JSON.stringify(todoList))
      navigate(`/`)
    }
  }
}

export const useFilterTasks = (tasks: ITodo[], filter: TaskFilter) => {
  const filteredTasks = useMemo(() => {
    let filteringTasks = structuredClone(tasks);
    switch (filter.value) {
      case 0:
        return filteringTasks
      case 1:
        return filteringTasks.filter(task => task.completed === false)
      case 2:
        return filteringTasks.filter(task => task.completed === true)
      default:
        return filteringTasks
    }
  }, [tasks, filter]);

  return filteredTasks;
}

export const useSearchTask = (tasks: ITodo[], searchQuery: string) => {
  const searchedTasks = useMemo(() => {
    let foundPosts = structuredClone(tasks);
    const searchArray = searchQuery.trim().toLowerCase().split(' ');
    for (let search of searchArray) {
      foundPosts = foundPosts.filter(task =>
        task.title.toLowerCase().includes(search) 
        // without search in description
        // || task.description.toLowerCase().includes(search)
      );
    }
    return foundPosts;
  }, [tasks, searchQuery]);

  return searchedTasks;
}

export const useFilterSearchTasks = (tasks: ITodo[], filter: TaskFilter, searchQuery: string) => {
  const filteredTasks = useFilterTasks(tasks, filter);
  const filteredSearchedTasks = useSearchTask(filteredTasks, searchQuery);
  return filteredSearchedTasks
}