import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Home from '../containers/Home';
import Counter from '../containers/Counter';
import UserInfo from '../containers/UserInfo';
import TodoList from '../containers/TodoList';

const getRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Counter" component={Counter} />
        <Route path="/UserInfo" component={UserInfo} />
        <Route path="/TodoList" component={TodoList} />
      </Switch>
    </div>
  </Router>
);
export default getRouter;
