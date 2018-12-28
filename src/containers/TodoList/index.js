import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './store/action';

import Todo from '../../components/Todo';
import './TodoList.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const { nextId } = this.props;
    this.state = {
      inputValue: '',
      nextId,
    };
  }

  handleOnChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      const { inputValue, nextId } = this.state;
      const { addTodoFunc } = this.props;
      if (!inputValue.trim()) {
        return;
      }
      addTodoFunc({
        text: inputValue,
        id: nextId + 1,
        completed: false,
      });
      this.setState({
        inputValue: '',
        nextId: nextId + 1,
      });
    }
  }

  render() {
    const { nextId, todos, toggleTodoFunc } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="todo-container">
        {todos.length > 0
          ? (
            <ul className="todo-list">
              {todos.map(item => (
                <Todo
                  item={item}
                  key={item.id}
                  toggleTodoFunc={toggleTodoFunc}
                />
              ))}
            </ul>
          )
          : '待做事项：0'
        }
        <div className="input-container">
          <span className="add-icon">+</span>
          <input
            type="text"
            value={inputValue}
            onChange={e => this.handleOnChange(e)}
            onKeyUp={this.handleKeyDown.bind(this)}
          />
        </div>
      </div>
    );
  }
}

TodoList.defaultProps = {};
TodoList.propTypes = {
  nextId: PropTypes.number.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  addTodoFunc: PropTypes.func.isRequired,
  toggleTodoFunc: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.todolist,
});

const mapDispatchToProps = dispatch => ({
  toggleTodoFunc: (id) => {
    dispatch(toggleTodo(id));
  },
  addTodoFunc: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
