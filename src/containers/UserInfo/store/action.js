import {
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
} from './constants';

const getUserInfoRequest = () => ({ type: GET_USER_INFO_REQUEST });

const getUserInfoSuccess = userInfo => ({
  type: GET_USER_INFO_SUCCESS,
  userInfo,
});

const getUserInfoFail = () => ({ type: GET_USER_INFO_FAIL });

const getUserInfo = () => (dispatch) => {
  dispatch(getUserInfoRequest());
  return fetch('/api/user.json')
    .then(res => res.json())
    .then(json => dispatch(getUserInfoSuccess(json)))
    .catch(() => dispatch(getUserInfoFail()));
};

export default getUserInfo;
