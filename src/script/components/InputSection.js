import { ADD_TASK } from '../changeTasks';


export const InputSection = addTask => {
  
  const onSubmit = type => {
    addTask({
      type,
      payload: inputSection.firstElementChild.value
    })
  }
  
  let inputSection = document.createElement('form');
  inputSection.className = 'input-section';
  inputSection.innerHTML = `
  New task: <input type="text" name="add_task" placeholder="Write new task here" required />
  <input type="submit" value="Add to list" />
  `;
  
  inputSection.onsubmit = () => onSubmit(ADD_TASK);
  
  return inputSection
}