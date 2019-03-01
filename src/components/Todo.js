import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

const Todo = ({ onClick, completed, text }) => (
  <li
    onKeyDown={() => {}}
    onClick={onClick}
    className={`list-item ${completed ? 'line' : ''}`}
  >
    <span className="circle">
      <span className="m-circle">1</span>
    </span>
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
