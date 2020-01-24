import { DECREMENT, INCREMENT } from "./constans";

export function createCounterIncrementAction() {
  return {
    type: INCREMENT,
  };
}
export function createCounterDecrementAction() {
  return {
    type: DECREMENT,
  };
}
