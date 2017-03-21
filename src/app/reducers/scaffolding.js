import {TEST_SCAFFOLDING} from '../constants/ActionTypes';

const initialState = {text: 'Initial value of text'};

export default function scaffolding(state = initialState, action) {
  switch (action.type) {
    case TEST_SCAFFOLDING:
      return Object.assign({}, state, {text: action.text});
    default:
      return state;
  }
}
