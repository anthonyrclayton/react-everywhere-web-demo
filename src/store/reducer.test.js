import { reducer, updateSessions, applyFilters } from './index'
import sessions from '../fixtures/sessions'

const INITIAL_STATE = {
  loading: true,
  sessions: []
}

it('groups sessions by time', () => {
  const state = reducer(INITIAL_STATE, updateSessions(sessions))

  expect(state.loading).toEqual(false);
  expect(state.sessions["2017-01-10T08:00:00"][0].Title).toEqual('7 Languages in 7 Hours');
})
