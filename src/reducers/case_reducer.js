import { identifiers } from '../helpers/identifiers.js';

export function caseReducer(state = { fields: {} }, action) {
  switch(action.type) {
    case 'GET_CASE_REQUESTED': {
      return {
        ...state,
        inProgress: true,
        error: '',
        success: ''
      };
    }
    case 'GET_CASE_REJECTED': {
      return {
        ...state,
        inProgress: false,
        error: 'Error in getting case.'
      };
    }
    case 'GET_CASE_FULFILLED': {
      var fields = {};
      identifiers.forEach((e) => {
        var res = e.split('__');
        if (res.length > 1) {
          fields[e] = action.theCase[res[0]][res[1]];
        } else {
          fields[e] = action.theCase[res[0]];
        }
      });

      return {
        ...state,
        raw: action.theCase,
        inProgress: false,
        success: 'Got case',
        fields: fields
      }
    }
    default:
      return state;
  }
}
