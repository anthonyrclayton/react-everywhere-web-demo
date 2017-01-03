import React from 'react';
import Session from './Session';
import renderer from 'react-test-renderer';
import sessions from '../fixtures/sessions'

const session = sessions[0]

it('renders without crashing', () => {
  const output = renderer.create(<Session {...session}/>);

  expect(output).toMatchSnapshot()
});
