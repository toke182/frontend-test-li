import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Static data
import * as loansStatic from '../mockData/current-loans.json';

// Actions
import * as LoansActions from '../actions/loans';
import * as LoansUiActions from '../actions/loansUi';

// Components
import Loans from '../components/Loans';

class LoansContainer extends Component {
  constructor(props) {
    super(props);
    this.storeInitLoans(loansStatic.loans);
  }

  storeInitLoans(loansStatic) {
    const {loansActions} = this.props;
    loansActions.initLoans(loansStatic);
  }

  render() {
    const {loans, loansUi, loansActions, loansUiActions} = this.props;
    return (
      <div>
        <Loans
          loans={loans}
          loansActions={loansActions}
          loansUi={loansUi}
          loansUiActions={loansUiActions}
          />
      </div>
    );
  }
}

LoansContainer.propTypes = {
  loans: PropTypes.array.isRequired,
  loansUi: PropTypes.object.isRequired,
  loansActions: PropTypes.object.isRequired,
  loansUiActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    loans: state.loans,
    loansUi: state.loansUi
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loansActions: bindActionCreators(LoansActions, dispatch),
    loansUiActions: bindActionCreators(LoansUiActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoansContainer);
