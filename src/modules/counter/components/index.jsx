import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createCounterDecrementAction, createCounterIncrementAction} from "../actions";

export function Counter(props) {
  const value = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(createCounterIncrementAction());
  };

  const handleDecrease = () => {
    dispatch(createCounterDecrementAction());
  };

  return (
    <div>
      <button onClick={handleDecrease} className="counter_button">
      -
      </button>
    <div
      className="counter_value"
    >
      { value }
    </div>
      <button onClick={handleIncrease} className="counter_button">
        +
      </button>
    </div>
  );
}
