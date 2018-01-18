import React from 'react';
import ReactDOM from 'react-dom';
import CaseSection from '../containers/case_section_container.js';
import DummyForm from './DummyForm';
import { Route, Switch, Link } from 'react-router-dom';
import Form from "react-jsonschema-form";

import schema from '../helpers/schema.json';

// console.log('myData: ',myData);

// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

const log = (type) => console.log.bind(console, type);


export default class Case extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.onGetCase(this.props.match.params.caseId);
  }

  componentWillMount() {}

  componentWillUnmount () {}

  componentDidUpdate(prevProps,prevState) {}

  submitForm() {
    // console.log('refs: ',this.refs);
    // console.log('the form: ',this.form);
  	this.form.getWrappedInstance().submitButton.click();
    // ReactDOM.findDOMNode(this.refs.submitButton).click()
  }

  render() {
    console.log('*** rendering case component ***');
    if (!this.props.case.raw) {
      return (
        <div>Loading</div>
      )
    } else {
      return (
        <div className="case">
          <div className="sidebar">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    STI Client
                  </a>
                </div>
              </div>
            </nav>
            <ul className="nav nav-pills nav-stacked">
              <li className="case-section-link">
                <Link to={`${this.props.match.url}/provider`}>
                  <span className="case-section-link-text">Provider</span>
                  <span className="case-section-link-icon"><i className="fa fa-user-md" aria-hidden="true"></i></span>
                </Link>
              </li>
              <li className="case-section-link">
                <Link to={`${this.props.match.url}/facility`}>
                  <span className="case-section-link-text">Facility</span>
                  <span className="case-section-link-icon"><i className="fa fa-hospital-o" aria-hidden="true"></i></span>
                </Link>
              </li>
              <li className="case-section-link">
                <Link to={`${this.props.match.url}/patient`}>
                  <span className="case-section-link-text">Patient</span>
                  <span className="case-section-link-icon"><i className="fa fa-user" aria-hidden="true"></i></span>
                </Link>
              </li>
              <li className="case-siderbar-save">
                <button
                  type="button"
                  className="button is-primary is-medium is-disabled is-fullwidth"
                  disabled={!this.props.case.dirty}
                  onClick={this.submitForm}
                >
                  Update Case
                </button>
              </li>
            </ul>
          </div>
          <div className="main">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/cases">Cases</Link></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="case-section-wrapper">
              <Switch>
                <Route
                  path={`${this.props.match.url}/provider`}
                  render={()=><CaseSection section="Provider" ref={(form) => {this.form=form;}}/>}
                />
                <Route
                  path={`${this.props.match.url}/facility`}
                  render={ () => <CaseSection section="Facility" ref={(form) => {this.form=form;}}/> }
                />
                <Route
                  path={`${this.props.match.url}/patient`}
                  render={()=><CaseSection section="Patient" ref={(form) => {this.form=form;}}/>}
                />
              </Switch>
            </div>
          </div>
        </div>
      );
    }
  }
}
