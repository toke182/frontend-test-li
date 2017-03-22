import React, {PropTypes, Component} from 'react';

class LoanThombstone extends Component {
  constructor() {
    super();
    this.handleShowLoanDetail = this.handleShowLoanDetail.bind(this);
  }
  handleShowLoanDetail() {
    const {loan, onShowLoanDetail} = this.props;

    onShowLoanDetail(loan.id);
  }

  render() {
    const {loan} = this.props;

    return (
      <div>
        <h2>{loan.title}</h2>
        <span className={loan.invested ? 'show' : 'hide'}>INVESTED</span>
        <ul>
          <li>Tranche: {loan.tranche}</li>
          <li>Available: {loan.available}</li>
          <li>Annualised return: {loan.annualised_return}</li>
          <li>Term Remaining: {loan.term_remaining}</li>
          <li>Ltv: {loan.ltv}</li>
          <li>Amount: £{loan.amount}</li>
        </ul>
        <button onClick={this.handleShowLoanDetail}>
          Invest in Loan
        </button>
      </div>
    );
  }
}

LoanThombstone.propTypes = {
  loan: PropTypes.object.isRequired,
  onShowLoanDetail: PropTypes.func.isRequired
};

export default LoanThombstone;
