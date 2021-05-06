import { List } from './script/components/List';
import { getTasks } from './script/getTasks';

import './style.css';

const url = 'https://jsonplaceholder.typicode.com/todos';
const limit = 10;

getTasks(url, limit)
  .then(tasks => List(tasks))
  .catch(err => console.log('Looks like a big trouble:', err))
