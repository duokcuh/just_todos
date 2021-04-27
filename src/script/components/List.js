import { ListItem } from './ListItem';


export const List = tasks => {
  
  const root = document.getElementById('root');
  
  tasks.sort((a, b) => a.completed - b.completed);
  console.log(tasks);
  const list = document.createElement('ol');
  list.id = 'task-list';
  tasks.forEach(elem => list.append(ListItem(elem.title, elem.completed)));
  
  root.append(list)
  
  return list
}