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

  isAvailableAmountExceded() {
    return this.props.errors.filter(error => error.id === 0).length > 0;
  }
  handleSubmit(e) {
    e.preventDefault();
    const {amount} = e.target.elements;
    const {loan, onSubmitInvestmentAmount} = this.props;
    onSubmitInvestmentAmount(amount.value, loan);
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
          <span className={this.isAvailableAmountExceded() ? 'show' : 'hide'}>Amount introduced is bigger than available</span>
          <button type="submit">Invest now</button>
        </form>
        <button onClick={this.handleHideLoanDetail}>HIDE DETAIL</button>
      </div>
    );
  }
}

LoanDetail.propTypes = {
  loan: PropTypes.object,
  errors: PropTypes.array,
  isDetailShown: PropTypes.bool,
  onHideLoanDetail: PropTypes.func.isRequired,
  onSubmitInvestmentAmount: PropTypes.func.isRequired
};

export default LoanDetail;
