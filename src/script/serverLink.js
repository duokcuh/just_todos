
const url = 'https://jsonplaceholder.typicode.com/todos';
// let urlParams = '?userId=1&_limit=10';

let urlWithParams = new URL(url);
let params = {
  userId: 1,
  _limit: 10
}
for (let key in params) urlWithParams.searchParams.append(key, params[key]);

export { url, urlWithParams }