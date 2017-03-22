import {SHOW_LOAN_DETAIL, HIDE_LOAN_DETAIL} from '../constants/LoanUiActionTypes';

export function showLoanDetail(id) {
  return {type: SHOW_LOAN_DETAIL, id};
}

export function hideLoanDetail() {
  return {type: HIDE_LOAN_DETAIL};
}
