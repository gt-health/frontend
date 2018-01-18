import React from 'react';
import ReactDOM from 'react-dom';
import CaseSection from '../containers/case_section_container.js';
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
  }

  componentDidMount() {
    this.props.onGetCase(this.props.match.params.caseId);
  }

  componentWillMount() {}

  componentWillUnmount () {}

  componentDidUpdate(prevProps,prevState) {}

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
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to={`${this.props.match.url}/provider`}>Provider</Link></li>
              <li><Link to={`${this.props.match.url}/facility`}>Facility</Link></li>
              <li><Link to={`${this.props.match.url}/patient`}>Patient</Link></li>
              <li><button>Save</button></li>
            </ul>
          </div>
          <div className="main">
            <Switch>
              <Route
                path={`${this.props.match.url}/provider`}
                render={()=><CaseSection section="Provider"/>}
              />
              <Route
                path={`${this.props.match.url}/facility`}
                render={ () => <CaseSection section="Facility"/> }
              />
              <Route
                path={`${this.props.match.url}/patient`}
                render={()=><CaseSection section="Patient"/>}
              />
            </Switch>
          </div>
        </div>
      );
    }
  }
}
