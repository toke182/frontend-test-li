import * as actions from './loans';
import {INIT_LOANS, ADD_INVESTMENT} from '../constants/LoanActionsTypes';

const loans = [
  {
    id: 1,
    title: 'Voluptate et sed tempora qui quisquam.',
    tranche: 'A',
    available: '11,959',
    annualised_return: 8.60,
    term_remaining: 864000,
    ltv: 48.80,
    amount: '85,754'
  },
  {
    id: 5,
    title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
    tranche: 'B',
    available: '31,405',
    annualised_return: 7.10,
    term_remaining: 1620000,
    ltv: 48.80,
    amount: '85,754'
  }
];

describe('ACTIONS:', () => {
  describe('Loans', () => {
    it('initLoans should create ADD_TODO action', () => {
      expect(actions.initLoans(loans)).toEqual({
        type: INIT_LOANS,
        loans
      });
    });

    it('addInvestment should create ADD_INVESTMENT action', () => {
      expect(actions.addInvestment({amount: 30, id: 1})).toEqual({
        type: ADD_INVESTMENT,
        payload: {amount: 30, id: 1}
      });
    });
  });
});
