import React from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
    this.props.onSearch(params);
  }

  render() {
    console.log('*** rendering search component ***');
    return (
      <div className="search">
        <div className="container">
          <div className="columns">
          </div>
          <div className="columns">
            <div className="column">
            <div className="field">
              <label className="label">Case ID</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Case ID"
                  name="caseID"
                  value={this.state.caseID}
                  onChange={(e) => this.handleInputChange(e)}/>
                <span className="icon is-small is-left">
                  <i className="fa fa-id-card-o"></i>
                </span>
              </div>
            </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Date Range</label>
                <div className="control">
                  <DateRangePicker
                    startDate={this.state.dateStart}
                    endDate={this.state.dateEnd}
                    onDatesChange={({ dateStart, dateEnd }) => this.setState({ dateStart, dateEnd })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Last name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={(e) => this.handleInputChange(e)}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">First name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={(e) => this.handleInputChange(e)}
                    />
                  <span className="icon is-small is-left">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Zip Code</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Zip Code"
                    name="zipCode"
                    value={this.state.zipCode}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-map-marker"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Diagnosis</label>
                <div className="control">
                  <div className="select">
                    <select value={this.state.diagnosis} onChange={(e) => this.handleInputChange(e)} name="diagnosis">
                      <option>Select diagnosis</option>
                      <option value="toefungus">Toe Fungus</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <a className="button is-primary is-active" onClick={() => this.handleSubmit()}>Search</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
