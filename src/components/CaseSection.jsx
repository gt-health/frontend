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

  render() {
    console.log('*** rendering case section -- '+this.props.section+' -- component ***');

      return (
        <div>
        <h1>{this.props.section}</h1>
          <Form
            schema={schema.properties[this.props.section]}
            formData={this.props.caseSection}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")}
          />
        </div>
      );
  }
}
