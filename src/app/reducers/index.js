import {combineReducers} from 'redux';

// Reducers
import loans from './loans';
import loansUi from './loansUi';

const rootReducer = combineReducers({
  loans,
  loansUi
});

export default rootReducer;
