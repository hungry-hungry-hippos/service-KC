import React from 'react';
import Enzyme from 'enzyme';
import GTKKnownList from './gTKKnownList';

describe('Rendering', () => {
  let testData;
  let wrapper;
  let wrapperEmpty;

  beforeAll(() => {
    testData = [
      {
        name: 'Dinner',
        icon: 'https://zagat.com/assets/knownfor/placeholder.svg',
      },
      {
        name: 'Takeout',
        icon: 'https://zagat.com/assets/knownfor/takeout.svg',
      },
    ];

    wrapper = Enzyme.shallow(<GTKKnownList knownFor={testData} />);
    wrapperEmpty = Enzyme.shallow(<GTKKnownList knownFor={[]} />);
  });

  it('should render props correctly', () => {
    expect(wrapper.find('#GTKKnownItems').render().find('.GTKKnownItem')).toHaveLength(2);
  });

  it('should not render when no data in props', () => {
    expect(wrapperEmpty.render().text()).toEqual('');
  });
});
