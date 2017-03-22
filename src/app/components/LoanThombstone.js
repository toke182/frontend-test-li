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
      <div className="thombstone">
        <h2 className="h2 title">{loan.title}</h2>
        <span className={`invested ${loan.invested ? 'show' : 'hide'}`}>Invested</span>
        <div className="clearfix"/>
        <ul className="thombstone-detail">
          <li>Tranche: {loan.tranche}</li>
          <li>Available: {loan.available}</li>
          <li>Annualised return: {loan.annualised_return}</li>
          <li>Term Remaining: {loan.term_remaining}</li>
          <li>Ltv: {loan.ltv}</li>
          <li>Amount: £{loan.amount}</li>
        </ul>
        <button className="btn btn-primary btn-big" onClick={this.handleShowLoanDetail}>
          Invest in Loan
        </button>
        <div className="clearfix"/>
      </div>
    );
  }
}

LoanThombstone.propTypes = {
  loan: PropTypes.object.isRequired,
  onShowLoanDetail: PropTypes.func.isRequired
};

export default LoanThombstone;
