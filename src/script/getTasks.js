
export const getTasks = async ( url, _limit = 10 ) => {
  
  let tasks;
  
  try {
  
    //let urlWithParams = url + '?userId=1&_limit=10';
    let urlWithParams = new URL(url);
    let params = {
      userId: 1,
      _limit
    }
    for (let key in params) urlWithParams.searchParams.append(key, params[key]);
    
    let response = await fetch (urlWithParams.href);
    tasks = await response.json();
    console.log('Server OK');
    
  }
  
  catch (err) {
    
    let response = await fetch (url);
    tasks = await response.json();
    tasks.length = _limit;
    console.log('Some server problem:', err);
    
  }
  
  let clearTasks = tasks.map(({ title, completed }) => {
    return { title, completed }
  })
  
  console.log('Server tasks: ', clearTasks);
  
  return clearTasks
}