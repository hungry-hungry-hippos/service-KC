import React from 'react';
import Enzyme from 'enzyme';
import GTKKnownItem from './gTKKnownItem';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeAll(() => {
    testData = {
      name: 'Dinner',
      icon: 'https://zagat.com/assets/knownfor/placeholder.svg',
    };

    wrapper = Enzyme.shallow(<GTKKnownItem item={testData} />);
  });

  it('should render props correctly', () => {
    expect(wrapper.find('img').render().attr('src')).toBe(testData.icon);
    expect(wrapper.find('.GTKKnownItemText').render().text()).toBe(testData.name);
  });
});
