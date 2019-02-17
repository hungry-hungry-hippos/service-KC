import React from 'react';
import Enzyme from 'enzyme';
import StarRating from './starRating';

describe('it should render correctly', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = Enzyme.shallow(<StarRating stars="3.2" />);
  });

  it('should have a background', () => {
    expect(wrapper.render().find('.StarBackground')).toHaveLength(1);
  });

  it('should have a filled layer', () => {
    expect(wrapper.render().find('.StarFilled')).toHaveLength(1);
    expect(wrapper.render().find('.StarFilled').css('width')).toBe('calc(64% - 0.07em)');
  });
});
