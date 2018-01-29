import axios from 'axios';
import buildQuery from '../helpers/buildQuery';
import history from '../helpers/history';

export function search(params) {
  return dispatch => {
    console.log('buildQuery: ',buildQuery(params));
    dispatch(searchRequestedAction());
    return axios.get(process.env.REACT_APP_API_URL_CASE)
      .then((response) => {
        console.log('response!!!: ',response);
        let cases = response.data;//Change for Michaels API
        dispatch(searchFulfilledAction(cases, params));
        history.push('/cases');
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

function searchFulfilledAction(cases, params) {
  return {
    type: 'SEARCH_FULFILLED',
    payload: { cases: cases, params: params }
  };
}
