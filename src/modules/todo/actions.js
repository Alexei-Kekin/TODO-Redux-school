import { TODO_ADD} from "./constans";

export function addTodo(title) {
  return {
    type: 'TODO_ADD',
    payload: {
      title,
    },
  };
}
