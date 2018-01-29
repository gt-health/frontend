import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';

export default class Cases extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillMount() {}

  componentWillUnmount () {}

  componentDidUpdate(prevProps,prevState) {}

  render() {
    console.log('*** rendering cases component ***');

    const columns = [{
      id: 'caseId',
      Header: 'Case ID',
      accessor: d => d.Id
    }, {
      id: 'patientName',
      Header: 'Name',
      accessor: d => d.Patient.Name.given + " " + d.Patient.Name.family
    }, {
      id: 'sendingApp',
      Header: 'Sending Application',
      accessor: d => d['Sending Application']
    }, {
      id: 'diagnosis',
      Header: 'Diagnosis',
      accessor: d => d.Patient.Diagnosis.Display
    }, {
      id: 'actions',
      Header: 'Actions',
      accessor: d => d.Id,
      Cell: row => <div><Link className="table-link" to={`/cases/${row.value}/view`}><button type="button" className="button is-link is-small">View Case</button></Link>&nbsp;<Link className="table-link" to={`/cases/${row.value}/edit/patient`}><button type="button" className="button is-primary is-small">Edit Case</button></Link></div>
    }];

    return (
      <div className="cases">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              STI client
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/search">Search</Link></li>
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
      <div className="cases-table-wrapper">
        <ReactTable
          data={this.props.cases}
          columns={columns}
        />
      </div>
      </div>
    );
  }
}
