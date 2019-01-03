import { VisibilityFilters } from '../actions';

const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL,
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      ));
    default:
      return state;
  }
};


const visibilityFilterReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const appReducer = (state = initialState, action) => ({
  todos: todoReducer(state.todos, action),
  visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
});


export default appReducer;
