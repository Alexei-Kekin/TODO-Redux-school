import  { store } from "../../store";
import {addTodo} from "./actions";

const todoRootNode = document.getElementById('todo-list-root');
const todoInputNode = document.getElementById('todo-input');
const todoBtnAddNode = document.getElementById('todo-btn-add');

function handleAddTodo() {
  const title = todoInputNode.value;
  const addTodoAction = addTodo(title);

  todoInputNode.value = '';
  store.dispatch(addTodoAction);
}

function renderTodoList() {
  const { todoReducer } = store.getState();
  const { items } = todoReducer;
  const listNode = document.createElement('ul');

  console.log(items);

  items.forEach(item => {
    const itemNode = document.createElement('li');

    itemNode.innerText = item;
    listNode.appendChild(itemNode);
  });

  todoRootNode.append(listNode);
}

renderTodoList();

store.subscribe(renderTodoList);

todoInputNode.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleAddTodo();
  }
});

todoBtnAddNode.addEventListener('click', handleAddTodo);
