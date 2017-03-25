import React from 'react';
import {shallow} from 'enzyme';
import Loans from './Loans';

function setupProps(propOverrides) {
  const props = Object.assign({
    loans: [
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
    ],
    loansUi: {},
    loansActions: {
      addInvestment: jasmine.createSpy()
    },
    loansUiActions: {
      showLoanDetail: jasmine.createSpy(),
      addErrorAmountExceded: jasmine.createSpy(),
      removeErrorAmountExceded: jasmine.createSpy(),
      hideLoanDetail: jasmine.createSpy()

    }
  }, propOverrides);

  return props;
}

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

describe('COMPONENTS', () => {
  describe('Loans', () => {
    it('should render content', () => {
      const props = setupProps();
      const wrapper = shallow(<Loans {...props}/>);

      expect(wrapper.find('h1')).toBeTruthy();
      expect(wrapper.find('.loan-thombstones').children().length).toBe(2);
      expect(wrapper.find('.loans-total-ammount > strong')).toBeTruthy();
      expect(wrapper.find('.modal')).toBeTruthy();
    });

    it('should display modal', () => {
      const props = setupProps({loansUi: {showLoanDetail: 1}});
      const wrapper = shallow(<Loans {...props}/>);

      expect(wrapper.find('.modal').hasClass('show')).toBe(true);
    });

    it('should not display modal', () => {
      const props = setupProps();
      const wrapper = shallow(<Loans {...props}/>);

      expect(wrapper.find('.modal').hasClass('hide')).toBe(true);
    });

    it('should call addInvestment when amount less than available and hide detail', () => {
      const props = setupProps();
      const spyHideDetail = spyOn(Loans.prototype, 'handleHideLoanDetail');
      const wrapper = shallow(<Loans {...props}/>);

      expect(spyHideDetail).not.toHaveBeenCalled();
      wrapper.instance().handleSubmitInvestmentAmount(1000, props.loans[0]);

      expect(props.loansActions.addInvestment).toHaveBeenCalledWith({
        amount: 1000,
        id: props.loans[0].id
      });
      expect(spyHideDetail).toHaveBeenCalled();
    });
  });

  it('should show error when introduced amount is bigger than available', () => {
    const props = setupProps();
    const spyHideDetail = spyOn(Loans.prototype, 'handleHideLoanDetail');
    const wrapper = shallow(<Loans {...props}/>);

    expect(spyHideDetail).not.toHaveBeenCalled();
    expect(props.loansUiActions.addErrorAmountExceded).not.toHaveBeenCalled();
    wrapper.instance().handleSubmitInvestmentAmount(1000000, props.loans[0]);

    expect(spyHideDetail).not.toHaveBeenCalled();
    expect(props.loansUiActions.addErrorAmountExceded).toHaveBeenCalled();
  });

  it('should display loan detail and add modal-open class to body', () => {
    const props = setupProps();
    const wrapper = shallow(<Loans {...props}/>);

    wrapper.instance().handleShowLoanDetail(props.loans[0].id);

    expect(props.loansUiActions.showLoanDetail).toHaveBeenCalledWith(props.loans[0].id);
    expect(hasClass(document.body, 'modal-open')).toBe(true);
  });

  it('should hide loan detail, remove errors and remove modal body class', () => {
    const props = setupProps();
    const wrapper = shallow(<Loans {...props}/>);

    expect(props.loansUiActions.removeErrorAmountExceded).not.toHaveBeenCalled();
    expect(props.loansUiActions.hideLoanDetail).not.toHaveBeenCalled();

    wrapper.instance().handleHideLoanDetail();

    expect(props.loansUiActions.removeErrorAmountExceded).toHaveBeenCalled();
    expect(props.loansUiActions.hideLoanDetail).toHaveBeenCalled();
    expect(hasClass(document.body, 'modal-open')).toBe(false);
  });
});
