import {
  SHOW_LOAN_DETAIL,
  HIDE_LOAN_DETAIL,
  ADD_ERROR_AMOUNT_EXCEDED,
  REMOVE_ERROR_AMOUNT_EXCEDED
} from '../constants/LoanUiActionTypes';

export function showLoanDetail(id) {
  return {type: SHOW_LOAN_DETAIL, id};
}

export function hideLoanDetail() {
  return {type: HIDE_LOAN_DETAIL};
}

export function addErrorAmountExceded() {
  return {type: ADD_ERROR_AMOUNT_EXCEDED};
}

export function removeErrorAmountExceded() {
  return {type: REMOVE_ERROR_AMOUNT_EXCEDED};
}
