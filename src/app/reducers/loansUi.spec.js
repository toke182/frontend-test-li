import loansUi from './loansUi';
import * as types from '../constants/LoanUiActionTypes';

const initialStateMock = {
  errors: []
};

describe('LoansUi reducer: ', () => {
  it('should handle initial state', () => {
    expect(loansUi(undefined, {})).toEqual(initialStateMock);
  });

  it('should handle SHOW_LOAN_DETAIL', () => {
    const action = {
      type: types.SHOW_LOAN_DETAIL,
      id: 10
    };
    expect(loansUi(undefined, action))
      .toEqual({showLoanDetail: 10, errors: []});
  });

  it('should handle HIDE_LOAN_DETAIL', () => {
    const action = {
      type: types.HIDE_LOAN_DETAIL
    };
    expect(loansUi(undefined, action))
      .toEqual({showLoanDetail: null, errors: []});
  });

  it('should handle ADD_ERROR_AMOUNT_EXCEDED', () => {
    const action = {
      type: types.ADD_ERROR_AMOUNT_EXCEDED,
      id: 0
    };
    expect(loansUi(undefined, action))
      .toEqual({
        errors: [
          {
            id: 0,
            description: 'Amount Exceded'
          }
        ]
      });
  });

  it('should handle ADD_ERROR_AMOUNT_EXCEDED with error already in payload', () => {
    const action = {
      type: types.ADD_ERROR_AMOUNT_EXCEDED,
      id: 0
    };

    const previousState = {
      errors: [
        {
          id: 0,
          description: 'Amount Exceded'
        }
      ]
    };

    expect(loansUi(previousState, action)).toEqual(previousState);
  });

  it('should handle REMOVE_ERROR_AMOUNT_EXCEDED', () => {
    const action = {
      type: types.REMOVE_ERROR_AMOUNT_EXCEDED
    };

    const previousState = {
      errors: [
        {
          id: 0,
          description: 'Amount Exceded'
        }
      ]
    };

    expect(loansUi(previousState, action))
      .toEqual(initialStateMock);
  });
});
