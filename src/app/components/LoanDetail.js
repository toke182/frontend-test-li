import React, {PropTypes, Component} from 'react';
import moment from 'moment';

class LoanDetail extends Component {
  constructor(props) {
    super(props);
    this.handleHideLoanDetail = this.handleHideLoanDetail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHideLoanDetail() {
    this.props.onHideLoanDetail();
  }

  handleSubmit(e) {
    e.preventDefault();
    const {amount} = e.target.elements;
    const {loan, onSubmitInvestmentAmount} = this.props;
    onSubmitInvestmentAmount(amount.value, loan.id);
  }

  render() {
    const {loan, isDetailShown} = this.props;
    if (!loan) {
      return null;
    }

    return (
      <div className={isDetailShown ? 'show' : 'hide'}>
        <h2>Invest in Loan</h2>
        <p>{loan.title}</p>
        <ul>
          <li>Amount available: £{loan.available}</li>
          <li>
            Loan ends in: {moment().add(loan.term_remaining, 'seconds').fromNow(true)}
          </li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="amount">Investment Amount (£)</label>
          <input id="amount" name="amount" type="number" step="any"/>
          <button type="submit">Invest now</button>
        </form>
        <button onClick={this.handleHideLoanDetail}>HIDE DETAIL</button>
      </div>
    );
  }
}

LoanDetail.propTypes = {
  loan: PropTypes.object,
  isDetailShown: PropTypes.bool,
  onHideLoanDetail: PropTypes.func.isRequired,
  onSubmitInvestmentAmount: PropTypes.func.isRequired
};

export default LoanDetail;
