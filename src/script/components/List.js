import { ListItem } from './ListItem';
import { changeTasks } from '../changeTasks';
import { InputSection } from './InputSection';


export const List = tasks => {
  
  const onChange = action => List(changeTasks(tasks, action));
  
  tasks.sort((a, b) => a.completed - b.completed);
  
  const list = document.createElement('section');
  list.id = 'task-list';
  tasks.forEach((elem, id) => list.append(ListItem(elem, id, onChange)));
  
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.append(list, InputSection(onChange));
  
  return list
}