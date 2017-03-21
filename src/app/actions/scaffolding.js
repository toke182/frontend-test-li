import {TEST_SCAFFOLDING} from '../constants/ActionTypes';

export function testScaffolding(text) {
  return {type: TEST_SCAFFOLDING, text};
}
