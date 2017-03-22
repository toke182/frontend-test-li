import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import LoansContainer from '../containers/LoansContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={LoansContainer}/>
  </Router>
);

export default routes;
