import { INCREMENT, DECREMENT, RESET } from './constants';

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const resetAction = () => ({
  type: RESET,
});
