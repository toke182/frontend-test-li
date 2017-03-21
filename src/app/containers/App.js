import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Scaffolding from '../components/Scaffolding';
import * as ScaffoldingActions from '../actions/scaffolding';

class App extends Component {
  render() {
    const {scaffolding, scaffoldingActions} = this.props;
    return (
      <div>
        <Scaffolding
          scaffolding={scaffolding}
          scaffoldingActions={scaffoldingActions}
          />
      </div>
    );
  }
}

App.propTypes = {
  scaffolding: PropTypes.object.isRequired,
  scaffoldingActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    scaffolding: state.scaffolding
  };
}

function mapDispatchToProps(dispatch) {
  return {
    scaffoldingActions: bindActionCreators(ScaffoldingActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
