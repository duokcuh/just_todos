import { ListItem } from './ListItem';
import { changeTasks } from '../changeTasks';
import { InputSection } from './InputSection';


export const List = tasks => {
  
  const onChange = action => List(changeTasks(tasks, action));
  
  const list = document.createElement('section');
  const root = document.getElementById('root');
  
  tasks.sort(( a, b ) => a.completed - b.completed);
  tasks.forEach(( elem, id ) => list.append(ListItem(elem, id, onChange)));
  list.id = 'task-list';
  root.innerHTML = '';
  root.append(list, InputSection(onChange));
  
  return list
}