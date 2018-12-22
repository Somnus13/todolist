import {
  FILTER_ALL,
  ADD_TODO,
  TOGGLE_TODO,
} from './constants';

const initState = {
  todos: [],
  filter: FILTER_ALL,
  nextId: 0,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
        nextId: action.todo.id,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
