import { connect } from 'react-redux';
import Case from '../components/Case.jsx';
import { getCase } from '../actions/get_case.js';

function mapStateToProps(state) {
  return {
    // user: state.user,
    // router: state.router
    case: state.case
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetCase: (caseId) => dispatch(getCase(caseId))
    // onChangeView: (redirectTo) => dispatch(changeView(redirectTo)),
  };
}

const caseContainer = connect(mapStateToProps, mapDispatchToProps)(Case);

export default caseContainer;
