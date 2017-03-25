import loans from './loans';
import * as types from '../constants/LoanActionsTypes';

const loanList = [
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

const loanListParsed = [
  {
    id: 1,
    title: 'Voluptate et sed tempora qui quisquam.',
    tranche: 'A',
    available: 11959,
    annualised_return: 8.60,
    term_remaining: 864000,
    ltv: 48.80,
    amount: 85754
  },
  {
    id: 5,
    title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
    tranche: 'B',
    available: 31405,
    annualised_return: 7.10,
    term_remaining: 1620000,
    ltv: 48.80,
    amount: 85754
  }
];

describe('Loans reducer: ', () => {
  it('should handle initial state', () => {
    expect(loans(undefined, {})).toEqual([]);
  });

  it('should handle INIT_LOANS', () => {
    const action = {
      type: types.INIT_LOANS,
      loans: loanList
    };
    expect(loans([], action)).toEqual(loanListParsed);
  });

  it('should handle ADD_INVESTMENT', () => {
    const actionExistentLoan = {
      type: types.ADD_INVESTMENT,
      payload: {amount: 50, id: 5}
    };

    expect(loans(loanListParsed, actionExistentLoan))
      .toEqual([
        {
          id: 1,
          title: 'Voluptate et sed tempora qui quisquam.',
          tranche: 'A',
          available: 11959,
          annualised_return: 8.60,
          term_remaining: 864000,
          ltv: 48.80,
          amount: 85754
        },
        {
          id: 5,
          title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
          tranche: 'B',
          available: 31355,
          annualised_return: 7.10,
          term_remaining: 1620000,
          ltv: 48.80,
          amount: 85754,
          invested: true
        }
      ]);

    const actionNonExistentLoan = {
      type: types.ADD_INVESTMENT,
      payload: {amount: 50, id: 10}
    };

    expect(loans(loanListParsed, actionNonExistentLoan)).toEqual(loanListParsed);
  });
});
