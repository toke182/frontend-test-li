import React from 'react';
import {shallow, mount} from 'enzyme';
import LoanThombstone from './LoanThombstone';

function setupProps(propOverrides) {
  const props = Object.assign({
    loan: {
      id: 1,
      title: 'Voluptate et sed tempora qui quisquam.',
      tranche: 'A',
      available: 11959,
      annualised_return: 8.60,
      term_remaining: 864000,
      ltv: 48.80,
      amount: 85754
    },
    onShowLoanDetail: jasmine.createSpy()
  }, propOverrides);

  return props;
}

describe('COMPONENTS', () => {
  describe('LoansThombstone', () => {
    it('should render content', () => {
      const props = setupProps();
      const wrapper = shallow(<LoanThombstone {...props}/>);
      const {loan} = props;
      expect(wrapper.find('h2').text()).toBe(loan.title);

      expect(wrapper.find('.thombstone-detail > li').length).toBe(6);
      expect(wrapper.find('button').text()).toBe('Invest in Loan');
    });

    it('should call onShowLoanDetail on click', () => {
      const props = setupProps();
      const wrapper = mount(<LoanThombstone {...props}/>);
      expect(props.onShowLoanDetail).not.toHaveBeenCalledWith(props.loan.id);
      wrapper.find('button').simulate('click');
      expect(props.onShowLoanDetail).toHaveBeenCalledWith(props.loan.id);
    });
  });
});
