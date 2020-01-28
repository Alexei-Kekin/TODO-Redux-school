import { store } from '../../store';
import { createCounterIncrementAction, createCounterDecrementAction } from "./actions";

const counterValueNode = document.getElementById('counter-value');
const counterDecrement = document.getElementById('decrement');
const counterIncrement = document.getElementById('increment');

store.subscribe(() => {
  const { counterReducer } = store.getState();

  counterValueNode.innerText = counterReducer;
});

counterDecrement.addEventListener('click', () => {
  store.dispatch(createCounterDecrementAction());
});

counterIncrement.addEventListener('click', () => {
  store.dispatch(createCounterIncrementAction());
});
