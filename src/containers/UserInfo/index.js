import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUserInfoAction from './store/action';

const UserInfo = (props) => {
  const {
    userinfo: { userInfo, isLoading, errorMsg },
    getUserInfo,
  } = props;
  return (
    <div>
      {isLoading
        ? '请求信息中...'
        : errorMsg || (
        <div>
          <p>用户信息</p>
          <p>
            用户名：
            {userInfo.name}
          </p>
          <p>
            介绍：
            {userInfo.intro}
          </p>
        </div>
        )}
      <button
        type="button"
        onClick={() => getUserInfo()}
      >
        请求用户信息
      </button>
    </div>
  );
};

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    userInfo: PropTypes.objectOf(PropTypes.string).isRequired,
    errorMsg: PropTypes.string.isRequired,
  }).isRequired,
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userinfo: state.userinfo,
});

export default connect(
  mapStateToProps,
  dispatch => ({
    getUserInfo: () => {
      dispatch(getUserInfoAction());
    },
  }),
)(UserInfo);
