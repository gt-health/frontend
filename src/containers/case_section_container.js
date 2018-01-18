import { connect } from 'react-redux';
import CaseSection from '../components/CaseSection.jsx';
// import { updateCase } from '../actions/update_case.js';

function mapStateToProps(state, ownProps) {
  return {
    // user: state.user,
    // router: state.router
    caseSection: state.case.raw[ownProps.section]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onChangeView: (redirectTo) => dispatch(changeView(redirectTo)),
    // onUpdateCase: (data) => dispatch(updateCase(data))
  };
}

const caseSectionContainer = connect(mapStateToProps, mapDispatchToProps)(CaseSection);

export default caseSectionContainer;
