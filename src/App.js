import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Store from './scenes/Store';
import Checkout from './scenes/Checkout';
import Confirmation from './scenes/Confirmation';
import { SneakerContext } from './context/Sneaker';
import { CHECKOUT_PATH, CONFIRMATION_PATH, STORE_PATH } from './constants';

import './App.css';

const App = () => {
  const [sneaker, setSneaker] = useState(null);
  const value = { sneaker, setSneaker };

  return (
    <SneakerContext.Provider value={value}>
      <Switch>
        <Route path={CHECKOUT_PATH} component={Checkout} />
        <Route path={CONFIRMATION_PATH} component={Confirmation} />
        <Route exact path={STORE_PATH} component={Store} />
        <Redirect to={STORE_PATH} />
      </Switch>
    </SneakerContext.Provider>
  );
};

export default App;
