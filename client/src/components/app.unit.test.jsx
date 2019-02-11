// Need to use enzyme, do a full dom render test
// Check if app is getting properly filled in
import React from 'react';
import Enzyme from 'enzyme';
import App from './app';


it('renders correctly', () => {
  const tree = Enzyme.shallow(<App />);
  expect(tree).toMatchSnapshot();
});
