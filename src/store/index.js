import { createStore } from 'redux';

const INITIAL_STATE = {
  loading: false,
  sessions: []
}

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('got action --------->', action)
  return INITIAL_STATE
}

const store = createStore(reducer);

export default store;
