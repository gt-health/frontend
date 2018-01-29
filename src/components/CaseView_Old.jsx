import React from 'react';
import ReactDOM from 'react-dom';
import CaseSection from '../containers/case_section_container.js';
import { Route, Switch, Link } from 'react-router-dom';
import Form from "react-jsonschema-form";
import schema from '../helpers/schema.json';
import { uiSchema } from '../helpers/uiSchema_forView';
import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";

const showWidget = (props) => {
  return (
    <p>{props.value}</p>
  );
};

const widgets = {
  showWidget: showWidget
};


function CustomFieldTemplate(props) {
  const {id, classNames, label, help, required, description, errors, children, fields, formContext, schema, uiSchema} = props;
  console.log('classNames: ',classNames);
  console.log('children: ',children);
  console.log('fields: ',fields),
  console.log('formContext: ',formContext);
  console.log('schema: ',schema);
  console.log('uiSchema: ',uiSchema);
  if (children.props.name == 'Provider') {
    return (
      <section>
        <div className={classNames}>
          <label htmlFor={id}>{label}{required ? "*" : null}</label>
          {description}
          {children}
          {errors}
          {help}
        </div>
      </section>
    );
  } else {
    return (
      <div className={classNames}>
        <label htmlFor={id}>{label}{required ? "*" : null}</label>
        {description}
        {children}
        {errors}
        {help}
      </div>
    )
  }
}

export default class Case extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.onGetCase(this.props.match.params.caseId);
  }

  componentWillMount() {}

  componentWillUnmount () {}

  componentDidUpdate(prevProps,prevState) {}

  submitForm() {
  	// this.form.getWrappedInstance().submitButton.click();
  }

  render() {
    const log = (type) => console.log.bind(console, type);

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
        <div>
        <h1>View Page!!!</h1>
          <Form
            schema={schema}
            formData={this.props.case.raw}
            uiSchema={uiSchema}
            widgets={widgets}
            FieldTemplate={CustomFieldTemplate}
            formContext={this}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")}
          >
            <button ref={(btn) => {this.submitButton=btn;}} className="hidden" />
          </Form>
        </div>
      );
    }
  }
}
