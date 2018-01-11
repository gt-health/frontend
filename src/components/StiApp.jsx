import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../containers/search_container.js';
import Case from '../containers/case_container.js';
import Cases from '../containers/cases_container.js';

export default class StiApp extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <section className="section">
        {/*<Route path="/" component={Navbar}/>*/}
        <Switch>
          <Route path="/search" component={Search}/>
          <Route path="/cases/:caseId" component={Case}/>
          <Route path="/cases" component={Cases}/>
        </Switch>
      </section>
    )
  }
}
