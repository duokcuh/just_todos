export const CHANGE_TASK = 'Change';
export const DELETE_TASK = 'Delete';
export const ADD_TASK = 'Add task';

export const changeTasks = ( tasks, action ) => {
  
  switch (action.type) {
    
    case CHANGE_TASK:
      tasks[action.payload].completed = !tasks[action.payload].completed;
      return tasks;
    
    case DELETE_TASK:
      tasks.splice(action.payload, 1);
      return tasks;
    
    case ADD_TASK:
      let newTask = {
        title: action.payload,
        completed: false
      }
      return [newTask, ...tasks];
    
    default:
      return tasks
  }
  
}