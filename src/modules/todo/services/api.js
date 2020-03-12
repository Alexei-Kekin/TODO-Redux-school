const API_URL = 'http://142.93.99.89:5000/api/todo';

export const requestTodoItems = () => fetch(`${API_URL}`).then(response => response.json());

export const postTodoItem = todo => {
  fetch(`${API_URL}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then(response => response.json());
};

// const MOCKED_TODO_ITEMS = [
//   { id: Date.now() + Math.random(), isCompleted: true, title: 'Проснуться' },
//   { id: Date.now() + Math.random(), isCompleted: false, title: 'Умыться' },
//   { id: Date.now() + Math.random(), isCompleted: false, title: 'Почистить зубы' },
//   { id: Date.now() + Math.random(), isCompleted: false, title: 'Поесть' },
//   { id: Date.now() + Math.random(), isCompleted: false, title: 'Собраться' },
// ];


// export const requestTodoItems = () => new Promise(resolve => {
//   setTimeout(() => {
//     resolve(MOCKED_TODO_ITEMS);
//   }, 3000);
// });
//
// const delay = ms => {
//   return new Promise(r => setTimeout(r(), ms));
// };
//
// export function fetchTodoItems() {
//   fetch('http://5de86ae9.ngrok.io/todos').then(response => response.json());
// }
