import { counterReducer } from '../modules/counter/reducer';
import { todoReducer } from '../modules/todo/reducer';
import {applyMiddleware} from 'redux';

const combinedReducers = window.Redux.combineReducers({
  counterReducer,
  todoReducer,
});

const logger = store => next => action => {
  console.log(JSON.stringify(action, null , 4));
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

export const store = window.Redux.createStore(
  combinedReducers,
  undefined,
  applyMiddleware(logger),
);
