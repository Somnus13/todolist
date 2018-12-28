import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibilityTodoList from '../containers/VisibilityTodoList';

const App = () => (
  <div>
    <Footer />
    <VisibilityTodoList />
    <AddTodo />
  </div>
);

export default App;
