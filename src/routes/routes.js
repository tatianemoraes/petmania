import React from "react";
import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import RegisterEmployee from '../pages/RegisterEmployee/index';
import FindPet from '../pages/FindPet/index';
import RegisterClient from '../pages/RegisterClient/index';
import StatusPet from '../pages/StatusPet/index';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={ Home } />
        <Route path={'/painel/login'} component={ Login } />
        <Route path={'/painel/register/employee'} component={ RegisterEmployee } />
        <Route path={'/painel/findpet'} component={ FindPet } />
        <Route path={'/painel/register/client'} component={ RegisterClient } />
        <Route path={'/client'} component={ StatusPet } />
      </Switch>
    </Router>
  )
}

