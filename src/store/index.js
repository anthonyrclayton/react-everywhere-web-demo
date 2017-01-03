import { createStore } from 'redux';
import R from 'ramda'

const UPDATE_SESSIONS = 'UPDATE_SESSIONS'

const byStartTime = R.groupBy((session) => {
  return session.SessionStartTime.toString()
})

export const updateSessions = (sessions) => {
  return {
    type: UPDATE_SESSIONS,
    sessions
  }
}

const INITIAL_STATE = {
  loading: true,
  sessions: {}
}

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('got action --------->', action)

  switch(action.type) {
    case(UPDATE_SESSIONS):
      return {
        ...state,
        loading: false,
        sessions: byStartTime(action.sessions)
      }

    default: return state
  }
}

const store = createStore(reducer);

export default store;
