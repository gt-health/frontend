import React from 'react';
import SchemaForm from 'react-jsonschema-form';
import GridField from './GridField';
import schema from '../helpers/schema.json';
import { uiSchema } from '../helpers/uiSchema_forView';
import { Link } from 'react-router-dom';

const showWidget = (props) => {
  return (
    <p>{props.value}</p>
  );
};

const widgets = {
  showWidget: showWidget
};

const fields = {
  grid: GridField
};

// const getUiSchema = () => {
//
//   let order = [
//     {
//       first: { md: 5 },
//       mi: { md: 2 },
//       last: { md: 5 }
//     },
//     {
//       suffix: { md: 2 },
//       ssn: { md: 5 },
//       dob: { md: 5 }
//     }
//   ]
//
//   return  {
//     personal: {
//       "ui:field": "grid",
//       "ui:options": {
//         "order": order
//       }
//     }
//   }
// }

export default class Case extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetCase(this.props.match.params.caseId);
  }

  render() {
    console.log('*** rendering case view component ***');
    if (this.props.case.inProgress) {
      return (
        <div className="loading-wrapper">
          <div className="loading-message">
            <span className="loading-message-text">Loading ECR</span><span className="loading-message-icon"><i className="fa fa-circle-o-notch fa-spin"></i></span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="case case-view">
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
              <li className="case-siderbar-button">
                <Link to={`/cases/${this.props.match.params.caseId}/edit/provider`}>
                  <button
                    type="button"
                    className="button is-primary is-medium is-fullwidth"
                  >
                    Edit Case
                  </button>
                </Link>
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
                    <li><Link to="/">Search</Link></li>
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
              <SchemaForm
                schema={schema}
                formData={this.props.case.raw}
                uiSchema={uiSchema}
                fields={fields}
                widgets={widgets}
              />
            </div>
          </div>
        </div>
      );
    }
  }

}

// const Applicant = () => {
//   if (true) {
//     return (
//       <div>
//         <h1>Applicant</h1>
//         <SchemaForm schema={schema} formData={this.props.case.raw} uiSchema={uiSchema} fields={fields}/>
//       </div>
//     );
//   }
// }
//
// export default Applicant
