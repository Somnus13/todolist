import { combineReducers } from 'redux';
import { reducer as countReducer } from '../containers/Counter/store';
import { reducer as userInfoReducer } from '../containers/UserInfo/store';
import { reducer as todolistReducer } from '../containers/TodoList/store';

export default combineReducers({
  counter: countReducer,
  userinfo: userInfoReducer,
  todolist: todolistReducer,
});
