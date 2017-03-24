import React, {PropTypes, Component} from 'react';
import moment from 'moment';

class LoanDetail extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const {loan} = this.props;
    if (!loan) {
      return null;
    }

    return (
      <div>
        <h2 className="modal-title h2">Invest in Loan</h2>
        <span>{loan.title}</span>
        <ul>
          <li>Amount available: £{loan.available.toLocaleString('en-UK')}</li>
          <li>
            Loan ends in: {moment().add(loan.term_remaining, 'seconds').fromNow(true)}
          </li>
        </ul>
        <form className="investment" onSubmit={this.handleSubmit}>
          <label htmlFor="amount">Investment Amount (£)</label>
          <input id="amount" name="amount" type="number" step="any"/>
          <span className={this.isAvailableAmountExceded() ? 'show' : 'hide'}>
            Amount introduced is bigger than available
          </span>
          <button type="submit" className="btn btn-small btn-primary">Invest now</button>
        </form>
      </div>
    );
  }
}

LoanDetail.propTypes = {
  loan: PropTypes.object,
  errors: PropTypes.array,
  onSubmitInvestmentAmount: PropTypes.func.isRequired
};

export default LoanDetail;
