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
      Cell: row => <div><Link className="table-link" to={`/cases/${row.value}/view`}><button type="button" className="button is-link is-small is-outlined">View Case</button></Link>&nbsp;<Link className="table-link" to={`/cases/${row.value}/edit/patient`}><button type="button" className="button is-danger is-outlined is-small">Edit Case</button></Link></div>
    }];

    return (
      <div className="cases">
        <nav className="navbar is-transparent" id="topnav">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              STI CLIENT
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="navbar-menu">

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link to={`/`}>
                      <button
                        type="button"
                        className="button is-medium"
                      >
                        Back to Search
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
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
