import { CHANGE_TASK } from '../changeTasks';

export const Checkbox = ( isChecked, onChange ) => {
  
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.title = 'Complete';
  checkbox.checked = isChecked;
  checkbox.onchange = () => onChange(CHANGE_TASK);
  
  return checkbox
}