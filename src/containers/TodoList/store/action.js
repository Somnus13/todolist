import {
  ADD_TODO,
  TOGGLE_TODO,
} from './constants';

export const addTodo = todo => ({ type: ADD_TODO, todo });
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
