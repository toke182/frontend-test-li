import * as actions from './loansUi';
import * as types from '../constants/LoanUiActionTypes';

describe('ACTIONS:', () => {
  describe('LoansUi', () => {
    it('showLoanDetail should create SHOW_LOAN_DETAIL action', () => {
      expect(actions.showLoanDetail(1)).toEqual({
        type: types.SHOW_LOAN_DETAIL,
        id: 1
      });
    });

    it('hideLoanDetail should create HIDE_LOAN_DETAIL action', () => {
      expect(actions.hideLoanDetail()).toEqual({
        type: types.HIDE_LOAN_DETAIL
      });
    });

    it('hideLoanDetail should create ADD_ERROR_AMOUNT_EXCEDED action', () => {
      expect(actions.addErrorAmountExceded()).toEqual({
        type: types.ADD_ERROR_AMOUNT_EXCEDED
      });
    });

    it('removeErrorAmountExceded should create REMOVE_ERROR_AMOUNT_EXCEDED action', () => {
      expect(actions.removeErrorAmountExceded()).toEqual({
        type: types.REMOVE_ERROR_AMOUNT_EXCEDED
      });
    });
  });
});
