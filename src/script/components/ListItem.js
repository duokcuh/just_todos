import {Checkbox} from './Checkbox';
import {Button} from './Button';

export const ListItem = ( content, isCompleted ) => {
  
  let item = document.createElement('li');
  item.className = 'list-item';
  item.innerHTML = `<p>${content}</p>`;
  let btnWrapper = document.createElement('div');
  btnWrapper.className = 'btn-wrapper';
  item.append(btnWrapper);
  btnWrapper.append(Checkbox(isCompleted), Button('Delete'));
  
  return item
}