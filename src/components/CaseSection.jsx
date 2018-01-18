import React from 'react';
import ReactDOM from 'react-dom';
import Form from "react-jsonschema-form";
import schema from '../helpers/schema.json';

const log = (type) => console.log.bind(console, type);

export default class Case extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.props.onGetCase(this.props.match.params.caseId);
  }

  componentWillMount() {}

  componentWillUnmount () {}

  componentDidUpdate(prevProps,prevState) {}

  onSubmit(data) {
    this.props.onSave(this.props.caseId, this.props.theCase);
  }

  onChange(data) {
    this.props.onChange(data.formData, this.props.section);
  }

  render() {
    console.log('*** rendering case section -- '+this.props.section+' -- component ***');

      return (
          <Form
            edit="false"
            schema={schema.properties[this.props.section]}
            formData={this.props.caseSection}
            onChange={(data) => this.onChange(data)}
            onSubmit={(data) => this.onSubmit(data)}
            onError={log("errors")}
          >
            <button ref={(btn) => {this.submitButton=btn;}} className="hidden" />
          </Form>
      );
  }
}
