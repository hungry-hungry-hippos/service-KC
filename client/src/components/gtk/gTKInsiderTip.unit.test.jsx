import React from 'react';
import Enzyme from 'enzyme';
import GTKInsiderTip, { TipText } from './gTKInsiderTip';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeAll(() => {
    testData = {
      tip: 'This is not a drill',
    };

    wrapper = Enzyme.shallow(<GTKInsiderTip tip={testData.tip} />);
  });

  it('should render props correctly', () => {
    expect(wrapper.find(TipText).render().text()).toBe(testData.tip);
  });
});
