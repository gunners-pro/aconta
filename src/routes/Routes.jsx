import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Auth from '../Pages/Auth';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
