import React from 'react';
import Enzyme from 'enzyme';
import StarRating, { StarBackground, StarFilled } from './starRating';

describe('it should render correctly', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = Enzyme.shallow(<StarRating stars="3.2" />);
  });

  it('should have a background', () => {
    expect(wrapper.dive().find(StarBackground)).toHaveLength(1);
  });

  it('should have a filled layer', () => {
    expect(wrapper.dive().find(StarFilled)).toHaveLength(1);
    expect(wrapper.dive().find(StarFilled).render().css('width')).toBe('calc(64% - 0.07em)');
  });
});
