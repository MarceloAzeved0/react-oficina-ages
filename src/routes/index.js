import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import UserList from '../pages/UserList';
import UserEdit from '../pages/UserEdit';
import UserAdd from '../pages/UserAdd';


function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/user/:id" component={UserEdit} />
        <Route path="/register/user" component={UserAdd} />
      </Switch>
    </Router>
  )
}

export default routes;