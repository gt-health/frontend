import axios from 'axios';

export function getCase(caseId) {
  return dispatch => {
    dispatch(getCaseRequestedAction());
    return axios.get(process.env.REACT_APP_API_URL+'/cases/'+caseId)
      .then((response) => {
        var theCase = response.data;
        dispatch(getCaseFulfilledAction(theCase));
      })
      .catch((error) => {
        console.log('error: ',error);
        dispatch(getCaseRejectedAction());
      });
  }
}

function getCaseRequestedAction() {
  return {
    type: 'GET_CASE_REQUESTED'
  };
}

function getCaseRejectedAction() {
  return {
    type: 'GET_CASE_REJECTED'
  }
}

function getCaseFulfilledAction(theCase) {
  return {
    type: 'GET_CASE_FULFILLED',
    theCase
  };
}
