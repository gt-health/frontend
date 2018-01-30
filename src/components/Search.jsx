import React from 'react';
import ReactDOM from 'react-dom';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      caseID: '',
      dateStart: '',
      dateEnd: '',
      lastName: '',
      firstName: '',
      zipCode: '',
      diagnosis: ''
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    const params = this.state;
    console.log('search params: ',params);
    this.props.onSearch(params);
  }

  render() {
    console.log('*** rendering search component ***');
    return (
      <div className="search">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                STI Client
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
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
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="inputCaseId">Case ID</label>
                <input
                  id="inputCaseId"
                  className="form-control"
                  type="text"
                  placeholder="Case ID"
                  name="caseID"
                  value={this.state.caseID}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </div>
            {/*<div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="inputDateRange">Date Range</label>
                <div>
                  <DateRangePicker
                    startDate={this.state.dateStart}
                    endDate={this.state.dateEnd}
                    onDatesChange={({ dateStart, dateEnd }) => this.setState({ dateStart, dateEnd })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                  />
                </div>
              </div>
            </div>*/}
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="inputLastName">Last name</label>
                <input
                  id="inputLastName"
                  className="form-control"
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={(e) => this.handleInputChange(e)}/>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="inputFirstName">First name</label>
                <input
                  id="inputFirstName"
                  className="form-control"
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.handleInputChange(e)}
                  />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="inputZipCode">Zip Code</label>
                <input
                  id="inputZipCode"
                  className="form-control"
                  type="text"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={this.state.zipCode}
                  onChange={(e) => this.handleInputChange(e)}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label for="inputDiagnosis">Diagnosis</label>
                <select value={this.state.diagnosis} onChange={(e) => this.handleInputChange(e)} name="diagnosis" className="form-control" id="inputDiagnosis">
                  <option>Select diagnosis</option>
                  <option value="toefungus">Toe Fungus</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <button className="button is-primary is-medium" onClick={() => this.handleSubmit()}>Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
