import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StiApp from '../containers/sti_container.js';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={StiApp} />
    </Router>
  </Provider>
);

export default Root;
