import {INIT_LOANS, ADD_INVESTMENT} from '../constants/LoanActionsTypes';

const initialState = [];

export default function loans(state = initialState, action) {
  const {payload} = action;

  switch (action.type) {
    case INIT_LOANS:
      return action.loans
        .map(loan => Object.assign({}, loan, {
          amount: parseFloat(loan.amount.replace(/,/g, '')),
          available: parseFloat(loan.available.replace(/,/g, '')),
          id: parseInt(loan.id, 10),
          term_remaining: parseInt(loan.term_remaining, 10)
        }));
    case ADD_INVESTMENT:
      return state
        .map(loan => {
          if (parseInt(loan.id, 10) === parseInt(payload.id, 10)) {
            const newAvailable = parseFloat(loan.available) - parseFloat(payload.amount);
            return Object.assign({}, loan, {invested: true}, {available: newAvailable});
          }
          return loan;
        });
    default:
      return state;
  }
}

