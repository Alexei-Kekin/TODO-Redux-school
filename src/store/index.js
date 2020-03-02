import { applyMiddleware } from 'redux';
import { counterReducer } from '../modules/counter/reducer';
import { todoReducer } from '../modules/todo/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducers = window.Redux.combineReducers({
  counterReducer,
  todoReducer,
});

// const logger = store => next => action => {
//   console.log(JSON.stringify(action, null , 4));
//   next(action);
// };
//
// const delayActions = store => next => action => {
//   console.log('Debounce middleware START');
//   setTimeout(() => {
//     next(action);
//     console.log('Debounce middleware END');
//   }, 3000);
// };

export const asyncActionsMiddleware = store =>next=> action=> {
  if (typeof action === 'function') {
    action(next);
  } else {
    next(action);
  }
};

const middlewares = [asyncActionsMiddleware];
const middlewareEnchancer = applyMiddleware(...middlewares);
const enchancers = [middlewareEnchancer];

export const store = window.Redux.createStore(
  combinedReducers,
  undefined,
  composeWithDevTools(...enchancers),
);
