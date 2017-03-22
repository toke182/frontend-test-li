import {INIT_LOANS, ADD_INVESTMENT} from '../constants/LoanActionsTypes';

export function initLoans(loans) {
  return {type: INIT_LOANS, loans};
}

export function addInvestment(payload) {
  return {type: ADD_INVESTMENT, payload};
}
