import React from 'react';
import {shallow, mount} from 'enzyme';
import LoanDetail from './LoanDetail';
import moment from 'moment';

function setupProps(propOverrides) {
  const props = Object.assign({
    loan: {
      id: 5,
      title: 'Loan Title',
      tranche: 'B',
      available: 31405,
      annualised_return: '7.10',
      term_remaining: 1620000,
      ltv: 48.80,
      amount: 85754
    },
    errors: [
    ],
    onSubmitInvestmentAmount: jasmine.createSpy()
  }, propOverrides);

  return props;
}

describe('COMPONENTS', () => {
  describe('Loan Detail', () => {
    it('should render content', () => {
      const props = setupProps();

      const wrapper = shallow(<LoanDetail {...props}/>);

      expect(wrapper.find('[data-q="loan-title"]')).toBeTruthy();

      expect(wrapper.find('[data-q="loan-available-amount"]')).toBeTruthy();

      const timeFromNow = moment()
        .add(props.loan.term_remaining, 'seconds')
        .fromNow(true);

      expect(wrapper.find('[data-q="loan-ends"]').text())
        .toBe(`Loan ends in: ${timeFromNow}`);

      expect(wrapper.find('form')).toBeTruthy();
    });

    it('form should call onSubmitInvestmentAmount prop', () => {
      const props = setupProps();
      const wrapper = mount(<LoanDetail {...props}/>);

      expect(wrapper.length).toBe(1);

      const input = wrapper.find('input[name="amount"]');
      const amount = 1200;
      input.get(0).value = amount;
      input.first().simulate('change');

      const form = wrapper.find('form');
      form.simulate('submit');

      expect(props.onSubmitInvestmentAmount).toHaveBeenCalledWith(amount.toString(), props.loan);
    });

    it('form should call onSubmitInvestmentAmount prop', () => {
      const props = setupProps();
      const wrapper = mount(<LoanDetail {...props}/>);

      expect(wrapper.length).toBe(1);

      const input = wrapper.find('input[name="amount"]');
      const amount = 1200;
      input.get(0).value = amount;
      input.first().simulate('change');

      const form = wrapper.find('form');
      form.simulate('submit');

      expect(props.onSubmitInvestmentAmount).toHaveBeenCalledWith(amount.toString(), props.loan);
    });
    it('should not render error when no error in list', () => {
      const props = setupProps();
      const wrapper = mount(<LoanDetail {...props}/>);
      expect(wrapper.find('[data-q="amount-error"]').hasClass('hide')).toEqual(true);
    });

    it('should render error when error in list', () => {
      const propsOverrides = {
        errors: [{
          id: 0,
          text: 'error generic text'
        }]
      };

      const props = setupProps(propsOverrides);
      const wrapper = shallow(<LoanDetail {...props}/>);
      expect(wrapper.find('[data-q="amount-error"]').hasClass('show')).toEqual(true);
    });
  });
});
