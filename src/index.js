import { List } from './script/components/List';
import { getTasks } from './script/getTasks';
import { url, urlWithParams } from './script/serverLink';

import './style.css';

getTasks(urlWithParams.href)
  
  .then(tasks => {
  console.log('Server OK');
  List(tasks);
  })
  
  .catch (err => {
    console.log('Some server problem:', err);
    getTasks(url)
      .then(tasks => {
        tasks.length = 10;
        List(tasks);
      })
      .catch(err => console.log('Looks like a big trouble:', err))
  })