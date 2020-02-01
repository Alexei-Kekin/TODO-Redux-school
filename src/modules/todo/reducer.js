import { TODO_ADD, TODO_REMOVE } from './constans';

const initialState = {
  items: [
    { id: Date.now() + Math.random(), title: 'One' },
    { id: Date.now() + Math.random(), title: 'Two' },
    { id: Date.now() + Math.random(), title: 'Three' },
    { id: Date.now() + Math.random(), title: 'Four' },
    { id: Date.now() + Math.random(), title: 'Five' },
  ],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };

    case TODO_REMOVE: {
      const newItems = state.items.filter(item => item.id !== action.payload.id);

      return {
        ...state,
        items: newItems,
      };
    }

    default:
      return state;
  }
}
