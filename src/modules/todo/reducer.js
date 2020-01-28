import { TODO_ADD } from './constans';

const initialState = {
  items: [
    'First',
    'Second',
  ],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state.items,
        items: [
          action.payload.title,
        ],
      };
    default:
      return state;
  }
}
