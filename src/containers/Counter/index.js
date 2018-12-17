import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementAction, decrementAction, resetAction } from './store/action';


const Counter = (props) => {
  const {
    count,
    increment,
    decrement,
    reset,
  } = props;
  return (
    <div>
      <div>
      当前计数：
        {count}
      </div>
      <button
        type="button"
        onClick={() => increment()}
      >
        自增
      </button>
      <button
        type="button"
        onClick={() => decrement()}
      >
      自减
      </button>
      <button
        type="button"
        onClick={() => reset()}
      >
      重置
      </button>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementAction());
  },
  decrement: () => {
    dispatch(decrementAction());
  },
  reset: () => {
    dispatch(resetAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
