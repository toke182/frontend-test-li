import React, {Component, PropTypes} from 'react';

// Components
import LoanThombstone from '../components/LoanThombstone';
import LoanDetail from '../components/LoanDetail';

class Loans extends Component {
  constructor(props) {
    super(props);

    this.isDetailShown = this.isDetailShown.bind(this);
    this.handleShowLoanDetail = this.handleShowLoanDetail.bind(this);
    this.handleHideLoanDetail = this.handleHideLoanDetail.bind(this);
    this.handleSubmitInvestmentAmount = this.handleSubmitInvestmentAmount.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  isDetailShown(loansUi) {
    return loansUi.showLoanDetail && Number.isInteger(loansUi.showLoanDetail);
  }

  handleShowLoanDetail(loanId) {
    const {loansUiActions} = this.props;
    loansUiActions.showLoanDetail(loanId);

    // Adds class to body to block scrolling when modal open
    if (document && document.body) {
      const orig = document.body.className;
      document.body.className = orig + (orig ? ' ' : '') + 'modal-open';
    }
  }

  handleHideLoanDetail() {
    const {loansUiActions} = this.props;
    loansUiActions.removeErrorAmountExceded();
    loansUiActions.hideLoanDetail();

    // Adds class to body to allow scrolling when modal closed
    if (document && document.body) {
      document.body.className = document.body.className.replace(/ ?modal-open/, '');
    }
  }

  handleSubmitInvestmentAmount(amount, loan) {
    const payload = {amount, id: loan.id};
    const {loansActions, loansUiActions} = this.props;
    const isAvailableAmountExceded = loan.available - amount >= 0;
    if (isAvailableAmountExceded) {
      loansActions.addInvestment(payload);
      this.handleHideLoanDetail();
    } else {
      loansUiActions.addErrorAmountExceded();
    }
  }

  sumTotalAvailable() {
    return this.props.loans
      .map(loan => loan.available)
      .reduce((acc, val) => acc + val, 0)
      .toLocaleString('en-UK');
  }

  handleMouseDown(e) {
    const isModalBgClicked = e.target.className
      .split(' ')
      .some(className => className === 'modal');

    if (isModalBgClicked) {
      this.handleHideLoanDetail();
    }
  }

  render() {
    const {loans, loansUi} = this.props;

    return (
      <div>
        <h1>Current Loans</h1>
        <ul className="loan-thombstones">
          {
            loans.map((loan, i) => {
              return (
                <li key={i}>
                  <LoanThombstone loan={loan} onShowLoanDetail={this.handleShowLoanDetail}/>
                </li>
              );
            })
          }
        </ul>
        <p className="loans-total-ammount">
          Total amount available for investment:&nbsp;
          <strong>£ {this.sumTotalAvailable()}</strong>
        </p>

        <div className={`modal ${this.isDetailShown(loansUi) ? 'show' : 'hide'}`} onMouseDown={this.handleMouseDown}>
          <div className="modal-container">
            <LoanDetail
              loan={loans.find(loan => {
                return loan.id === loansUi.showLoanDetail;
              })}
              onSubmitInvestmentAmount={this.handleSubmitInvestmentAmount}
              errors={loansUi.errors}
              />
          </div>
        </div>
      </div>
    );
  }
}

Loans.propTypes = {
  loans: PropTypes.array.isRequired,
  loansUi: PropTypes.object.isRequired,
  loansActions: PropTypes.object.isRequired,
  loansUiActions: PropTypes.object.isRequired
};

export default Loans;
