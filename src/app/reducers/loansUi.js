import {
  SHOW_LOAN_DETAIL,
  HIDE_LOAN_DETAIL,
  ADD_ERROR_AMOUNT_EXCEDED,
  REMOVE_ERROR_AMOUNT_EXCEDED
} from '../constants/LoanUiActionTypes';

const initialState = {
  errors: []
};

export default function loansUi(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOAN_DETAIL:
      return Object.assign({}, state, {showLoanDetail: parseInt(action.id, 10)});
    case HIDE_LOAN_DETAIL:
      return Object.assign({}, state, {showLoanDetail: null});
    case REMOVE_ERROR_AMOUNT_EXCEDED: {
      const stateClone = Object.assign({}, state);
      stateClone.errors = state.errors.filter(error => error.id !== 0);
      return stateClone;
    }
    case ADD_ERROR_AMOUNT_EXCEDED: {
      const errorPayload = {
        id: 0,
        description: 'Amount Exceded'
      };
      const isErrorDisplayed = state.errors.some(error => error.id === 0);

      if (isErrorDisplayed) {
        return state;
      }

      const stateClone = Object.assign({}, state);
      stateClone.errors.push(errorPayload);
      return stateClone;
    }
    default:
      return state;
  }
}
