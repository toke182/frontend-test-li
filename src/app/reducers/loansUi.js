import {SHOW_LOAN_DETAIL, HIDE_LOAN_DETAIL} from '../constants/LoanUiActionTypes';

const initialState = {};

export default function loansUi(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOAN_DETAIL:
      return Object.assign({}, state, {showLoanDetail: parseInt(action.id, 10)});
    case HIDE_LOAN_DETAIL:
      return Object.assign({}, state, {showLoanDetail: null});
    default:
      return state;
  }
}
