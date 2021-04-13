import { ListItem } from './ListItem';

import { getTasks } from './getTasks';


export const List = async () => {
  
  const url = 'https://jsonplaceholder.typicode.com/todos?userId=1';
  let tasks = await getTasks(url);
  // console.log(tasks);
  
  const tasksCompleted = tasks.filter(elem => elem.completed);
  const tasksCurrent = tasks.filter(elem => !elem.completed);
  let tasksSorted = [
    ...tasksCurrent,
    ...tasksCompleted
  ];
  
  const list = document.createElement('ol');
  tasksSorted.forEach(elem => {
    // console.log(elem);
    // console.log(elem.title);
    list.append(ListItem(elem.title));
  })
  
  // console.log(list);
  return list
}