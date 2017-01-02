import { createStore } from 'redux';

const UPDATE_SESSIONS = 'UPDATE_SESSIONS'

export const updateSessions = (sessions) => {
  console.log('---------------------')
  console.log('sessions', sessions)
  console.log('---------------------')
  return {
    type: UPDATE_SESSIONS,
    sessions
  }
}

const INITIAL_STATE = {
  loading: true,
  sessions: []
}

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('got action --------->', action)

  switch(action.type) {
    case(UPDATE_SESSIONS):
      return {
        ...state,
        loading: false,
        sessions: action.sessions
      }

    default: return state
  }
}

const store = createStore(reducer);

export default store;
