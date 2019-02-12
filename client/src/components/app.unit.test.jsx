// Need to use enzyme, do a full dom render test
// Check if app is getting properly filled in
import React from 'react';
import Enzyme from 'enzyme';
import App from './app';


it('renders correctly', () => {
  const wrapper = Enzyme.shallow(<App />);
  expect(wrapper).toMatchSnapshot();
  
  // Note: test needs to be rewritten after component implementation
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('GABRIEL KREUTHER');
});
