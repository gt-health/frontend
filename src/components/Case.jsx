import React from 'react';
import ReactDOM from 'react-dom';
import CaseField from '../containers/case_field_container.js';

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
    console.log('case: ',this.props.case);
    if (!this.props.case.raw) {
      return (
        <div>Loading</div>
      )
    } else {
      return (
        <div>
          <section className="section important">
          </section>
          <section className="section patient">
            <div className="container">
              <h1 className="title is-1">Patient</h1>
              <div className="columns">
                <div className="column">
                  <CaseField
                    label="Patient ID Number"
                    identifier="Patient__ID"
                    type="string"
                    editable="true"/>
                </div>
                <div className="column">
                  <CaseField
                    label="Birth Date"
                    identifier="Patient__Birth_Date"
                    type="string"
                    editable="true"/>
                </div>
                <div className="column">
                  <CaseField
                    label="Sex"
                    identifier="Patient__Sex"
                    type="string"
                    editable="true"/>
                </div>
              </div>
            </div>
          </section>
          <section className="section facility">
            <div className="container">
              <h1 className="title is-1">Facility</h1>
            </div>
          </section>
          <section className="section provider">
            <div className="container">
              <h1 className="title is-1">Provider</h1>
            </div>
          </section>
        </div>
      );
    }
  }
}
