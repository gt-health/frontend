import { connect } from 'react-redux';
import CaseField from '../components/CaseField.jsx';
// import { updateCase } from '../actions/update_case.js';

function mapStateToProps(state, ownProps) {
  console.log('')
  return {
    // user: state.user,
    // router: state.router
    caseField: state.case.fields[ownProps.identifier]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onChangeView: (redirectTo) => dispatch(changeView(redirectTo)),
    // onUpdateCase: (data) => dispatch(updateCase(data))
  };
}

const caseFieldContainer = connect(mapStateToProps, mapDispatchToProps)(CaseField);

export default caseFieldContainer;
