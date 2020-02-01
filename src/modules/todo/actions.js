import { TODO_ADD, TODO_REMOVE } from './constans';

export function addTodo(title) {
  return {
    type: TODO_ADD,
    payload: {
      id: Date.now() + Math.random(),
      title,
    },
  };
}

export function removeTodo(id) {
  return {
    type: TODO_REMOVE,
    payload: {
      id,
    },
  };
}
