import { GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL } from './constants';

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.userInfo,
      };
    case GET_USER_INFO_FAIL:
      return {
        isLoading: false,
        errorMsg: 'request error',
      };
    default:
      return state;
  }
};

export default reducer;
