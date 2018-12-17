import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Home from '../containers/Home';
import Counter from '../containers/Counter';

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Counter">Page1</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Counter} />
      </Switch>
    </div>
  </Router>
);
export default getRouter;
