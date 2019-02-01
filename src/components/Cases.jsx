import React from "react";
import ReactDOM from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

export default class Cases extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToCaseView = this.redirectToCaseView.bind(this);

    this.state = {};
  }

  redirectToCaseView(d) {
    let url = "/frontend/cases/" + d.Id + "/view?case:" + d;
    this.props.history.push(url, { case: d });
  }

  render() {
    console.log("*** rendering cases component ***");

    const columns = [
      {
        id: "caseId",
        Header: "Case ID",
        accessor: d => d.Id
      },
      {
        id: "patientName",
        Header: "Name",
        accessor: d => d.Patient.Name.given + " " + d.Patient.Name.family
      },
      {
        id: "sendingApp",
        Header: "Sending Application",
        accessor: d => d["Sending Application"]
      },
      {
        id: "diagnosis",
        Header: "Diagnosis",
        accessor: d => d.Patient.Diagnosis.Display
      },
      {
        id: "actions",
        Header: "Actions",
        accessor: d => d.Id,
        Cell: row => (
          <div>
            {/* <Link
              className="table-link"
              to={`/frontend/cases/${row.value}/view`}
            >
              <button
                type="button"
                className="button is-link is-small is-outlined"
              >
                View Case
              </button>
            </Link> */}
            <button onClick={() => this.redirectToCaseView(d)}>
              View Case
            </button>
          </div>
        )
      }
    ];

    return (
      <div className="cases">
        <nav className="navbar is-transparent" id="topnav">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              STI CLIENT
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link to={`/frontend`}>
                      <button type="button" className="button is-medium">
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
          <ReactTable data={this.props.cases} columns={columns} />
        </div>
      </div>
    );
  }
}
