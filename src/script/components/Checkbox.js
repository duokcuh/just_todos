

export const Checkbox = isChecked => {
  
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.title = 'Complete';
  checkbox.checked = isChecked;
  checkbox.onchange = () => console.log('status changed');
  
  return checkbox
}