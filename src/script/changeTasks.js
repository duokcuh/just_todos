
export const changeTasks = (tasks, id, action) => {
  
  switch (action) {
    case 'change':
      let taskId = tasks.findIndex(elem => elem[id] === id);
      !tasks[taskId].completed;
      return [...tasks];
    case 'delete':
      
      return {...tasks};
      
  }
  
}