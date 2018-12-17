import { combineReducers } from 'redux';
import { reducer as countReducer } from '../containers/Counter/store';

export default combineReducers({
  counter: countReducer,
});
