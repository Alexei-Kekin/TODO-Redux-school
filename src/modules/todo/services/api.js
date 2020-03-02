
// const MOCKED_TODO_ITEMS = [
//   { id: Date.now() + Math.random(), title: 'Проснуться' },
//   { id: Date.now() + Math.random(), title: 'Умыться' },
//   { id: Date.now() + Math.random(), title: 'Почистить зубы' },
//   { id: Date.now() + Math.random(), title: 'Поесть' },
//   { id: Date.now() + Math.random(), title: 'Собраться' },
// ];

const API_URL = 'http://cb3e530c.ngrok.io';

export const requestTodoItems = () => fetch(`${API_URL}/todos`).then(response => response.json());


// export const requestTodoItems = () => new Promise(resolve =>{
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


