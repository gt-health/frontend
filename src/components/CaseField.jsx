import React from 'react';
import ReactDOM from 'react-dom';

export default class CaseField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      dirty: false,
      updating: false,
      [this.props.identifier]: this.props.caseField
    };
  }

  turnOnEditMode() {
    this.setState({ editMode: true });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      dirty: true
    });
  }

  handleSubmit() {
    if (this.props.type == 'string') {
      this.props.onUpdateCaseField(this.state[this.props.identifier]);
    }
  }

  handleClear() {
    this.setState({
      [this.props.identifier]: '',
      dirty: true
    });
  }

  update() {
    //todo
    console.log('updating...');
  }

  clear() {
    //TODO
    console.log('clearing...');
  }

  render() {
    console.log('*** rendering case field component ***');
    return (
      <div className="case-field">
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          { this.state.editMode ?
            <div className="field has-addons">
              <p className="control">
                <input
                  className="input is-small"
                  type="text"
                  placeholder={this.props.label}
                  name={this.props.identifier}
                  value={this.state[this.props.identifier]}
                  onChange={(e) => this.handleInputChange(e)}/>
              </p>
              <p className="control">
                <a className="button is-info is-small" disabled={!this.state.dirty ? 'disabled' : ''} onClick={() => this.handleSubmit()}>
                  Update
                </a>
              </p>
              <p className="control">
                <a className="button is-info is-small" onClick={() => this.handleClear()}>
                  Clear
                </a>
              </p>
            </div>
          :
            <div>
              <p className="content">{ this.props.caseField }</p>
              { this.props.editable && <a className="button is-small is-warning" onClick={() => this.turnOnEditMode()}><i className="fa fa-pencil"></i></a> }
            </div>
          }
        </div>
      </div>
      </div>
    );
  }
}
