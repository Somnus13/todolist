import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="input-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return false;
          }
          dispatch(addTodo(input.value));
          input.value = '';
          return input;
        }}
      >
        <span className="add-icon">+</span>
        <input ref={(node) => { input = node; }} />
        <button
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
