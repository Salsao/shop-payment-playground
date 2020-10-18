import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Store from './scenes/Store';
import { STORE_PATH } from './constants';
import './App.css';

const App = () => (
  <>
    <Switch>
      <Route exact path={STORE_PATH} component={Store} />
      <Redirect to={STORE_PATH} />
    </Switch>
  </>
);

export default App;
