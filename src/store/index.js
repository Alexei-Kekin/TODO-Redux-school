import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../modules/counter/reducer';
import { todoReducer } from '../modules/todo/reducer';

const combinedReducers = combineReducers({
  counterReducer,
  todoReducer,
});

const logger = () => next => action => {
  console.log(JSON.stringify(action, null, 4));
  next(action);
};
//
// const delayActions = store => next => action => {
//   console.log('Debounce middleware START');
//   setTimeout(() => {
//     next(action);
//     console.log('Debounce middleware END');
//   }, 3000);
// };

export const asyncActionsMiddleware = () => next => action => {
  if (typeof action === 'function') {
    action(next);
  } else {
    next(action);
  }
};

const middlewares = [asyncActionsMiddleware, logger];
const middlewareEnchancer = applyMiddleware(...middlewares);
const enchancers = [middlewareEnchancer];

export const store = createStore(
  combinedReducers,
  undefined,
  composeWithDevTools(...enchancers),
);
