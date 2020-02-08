import { TODO_ADD, TODO_REMOVE, TODO_SET_FILTER } from './constans';

const initialState = {
  filter: '',
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

    case TODO_SET_FILTER:
      return {
        ...state,
        filter: action.payload.value,
      };

    default:
      return state;
  }
}
