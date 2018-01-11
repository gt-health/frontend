import axios from 'axios';
import buildQuery from '../helpers/buildQuery';

export function search(params) {
  return dispatch => {
    dispatch(searchRequestedAction());
    return axios.get(process.env.REACT_APP_API_URL+'/cases?'+buildQuery(params))
      .then((response) => {
        console.log('success: ',response);
        var cases = 'todo';
        dispatch(searchFulfilledAction(cases));
      })
      .catch((error) => {
        console.log('error: ',error);
        dispatch(searchRejectedAction());
      });
  }
}

function searchRequestedAction() {
  return {
    type: 'SEARCH_REQUESTED'
  };
}

function searchRejectedAction() {
  return {
    type: 'SEARCH_REJECTED'
  }
}

function searchFulfilledAction(cases) {
  return {
    type: 'SEARCH_FULFILLED',
    cases
  };
}
