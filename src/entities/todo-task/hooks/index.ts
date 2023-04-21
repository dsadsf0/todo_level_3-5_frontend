import { useAppDispatch } from "app/hooks/useStore";
import { useMemo } from "react";
import { addTask, deleteTasksById, editTasks } from "shared/store/tasks";
import { TaskFilter } from "entities/todo-task/types/filter";
import ITask from 'shared/types/ITask';

export const useDeleteTask = () => {
  const dispatch = useAppDispatch()

  return (task_id: number) => {
    dispatch(deleteTasksById(task_id))
  }
}

export const useEditTask = () => {
  const dispatch = useAppDispatch()

  return (task: ITask) => {
    dispatch(editTasks(task)) 
  }
}

export const useCreateTask = () => {
  const dispatch = useAppDispatch()

  return (task: ITask) => {
    dispatch(addTask(task))
  }
}

export const useFilterTasks = (tasks: ITask[], filter: TaskFilter) => {
  const filteredTasks = useMemo(() => {
    let filteringTasks = structuredClone(tasks);
    switch (filter.value) {
      case 0:
        return filteringTasks
      case 1:
        return filteringTasks.filter(task => !task.completed_at)
      case 2:
        return filteringTasks.filter(task => task.completed_at)
      default:
        return filteringTasks
    }
  }, [tasks, filter]);

  return filteredTasks;
}

export const useSearchTask = (tasks: ITask[], searchQuery: string) => {
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

export const useFilterSearchTasks = (tasks: ITask[], filter: TaskFilter, searchQuery: string) => {
  const filteredTasks = useFilterTasks(tasks, filter);
  const filteredSearchedTasks = useSearchTask(filteredTasks, searchQuery);
  return filteredSearchedTasks
}