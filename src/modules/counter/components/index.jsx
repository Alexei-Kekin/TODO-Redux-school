import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createCounterDecrementAction, createCounterIncrementAction } from '../actions';

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
      <Button
        className="counter_button"
        variant="contained"
        color="primary"
        onClick={handleDecrease}
      >
        -
      </Button>
      <div
        className="counter_value"
      >
        { value }
      </div>
      <Button
        className="counter_button"
        variant="contained"
        color="primary"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
}
