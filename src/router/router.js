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

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Counter">counter</Link></li>
        <li><Link to="/UserInfo">UserInfo</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Counter" component={Counter} />
        <Route path="/UserInfo" component={UserInfo} />
      </Switch>
    </div>
  </Router>
);
export default getRouter;
