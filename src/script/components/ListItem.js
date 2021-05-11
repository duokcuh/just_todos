import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { DELETE_TASK } from '../changeTasks';

export const ListItem = ({ title, completed:isCompleted }, id, changeTasks ) => {
  
  const onChange = type => changeTasks({
    type,
    payload: id
  });
  
  let item = document.createElement('div');
  let btnWrapper = document.createElement('div');
  
  item.className = 'list-item';
  item.innerHTML = `<p>${title}</p>`;
  item.append(btnWrapper);
  btnWrapper.className = 'btn-wrapper';
  btnWrapper.append(Checkbox(isCompleted, onChange), Button(DELETE_TASK, onChange));
  
  return item
}