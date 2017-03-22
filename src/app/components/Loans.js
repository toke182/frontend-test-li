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
  }

  isDetailShown(loansUi) {
    return loansUi.showLoanDetail && Number.isInteger(loansUi.showLoanDetail);
  }

  handleShowLoanDetail(loanId) {
    const {loansUiActions} = this.props;
    loansUiActions.showLoanDetail(loanId);
  }

  handleHideLoanDetail() {
    const {loansUiActions} = this.props;

    loansUiActions.hideLoanDetail();
  }

  handleSubmitInvestmentAmount(amount, loanId) {
    const payload = {amount, id: loanId};
    const {loansActions, loansUiActions} = this.props;

    loansActions.addInvestment(payload);
    loansUiActions.hideLoanDetail();
  }

  render() {
    const {loans, loansUi} = this.props;
    return (
      <div>
        <h1>Current Loans</h1>
        <ul>
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
        <p>
          Total amount available for investment:
          <strong>£238,456</strong>
        </p>

        <LoanDetail
          loan={loans.find(loan => {
            return parseInt(loan.id, 10) === loansUi.showLoanDetail;
          })}
          isDetailShown={this.isDetailShown(loansUi)}
          onHideLoanDetail={this.handleHideLoanDetail}
          onSubmitInvestmentAmount={this.handleSubmitInvestmentAmount}
          />
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
