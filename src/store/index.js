import { createStore } from 'redux';
import R from 'ramda'

const UPDATE_SESSIONS = 'UPDATE_SESSIONS'
const UPDATE_FILTERS = 'UPDATE_FILTERS'
let sessionsData = []

const byStartTime = R.groupBy((session) => {
  return session.SessionStartTime.toString()
})

export const updateSessions = (sessions) => {
  return {
    type: UPDATE_SESSIONS,
    sessions
  }
}

const applyFilters = (sessions, filters) => {
  return R.reject((s) => R.contains(s.SessionType)(filters))(sessions)
}

const toggleFilter = (filter, filters) => {
  if(R.contains(filter)(filters)) {
    return R.without([filter])(filters)
  }

  return R.append(filter, filters)
}

export const applyFilter = (filter) => {
  return { type: 'UPDATE_FILTERS', filter }
}

const INITIAL_STATE = {
  loading: true,
  sessions: {},
  filters: ['Kidz Mash']
}

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('got action --------->', action)

  switch(action.type) {
    case UPDATE_FILTERS:
      let filters = toggleFilter(action.filter, state.filters)

      return {
        ...state,
        filters,
        sessions: byStartTime(applyFilters(sessionsData, filters))
      }

    case(UPDATE_SESSIONS):
      sessionsData = action.sessions

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
