import {INIT_LOANS, ADD_INVESTMENT} from '../constants/LoanActionsTypes';

const initialState = [];

export default function loans(state = initialState, action) {
  const {loans, payload} = action;

  switch (action.type) {
    case INIT_LOANS:
      return [...loans];
    case ADD_INVESTMENT:
      return state
        .map(loan => {
          if (parseInt(loan.id, 10) === parseInt(payload.id, 10)) {
            const newAvailable = parseFloat(loan.available.replace(/,/g, '')) - parseFloat(payload.amount);
            return Object.assign({}, loan, {invested: true}, {available: newAvailable.toLocaleString('en-UK')});
          }
          return loan;
        });
    default:
      return state;
  }
}

