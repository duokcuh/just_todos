import { List } from './script/List';

const root = document.getElementById('root');
List().then(list => root.append(list));
