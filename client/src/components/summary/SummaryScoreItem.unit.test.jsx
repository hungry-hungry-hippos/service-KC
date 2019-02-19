import React from 'react';
import Enzyme from 'enzyme';
import ScoreItem, { ScoreLabel, ScoreRating } from './summaryScoreItem';

describe('Rendering', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = Enzyme
      .shallow(<ScoreItem scoreKey="food" value={4} />);
  });

  it('uses the props correctly', () => {
    expect(wrapper.find(ScoreLabel).render().text()).toBe('food');
    expect(wrapper.find(ScoreRating).render().text()).toBe('4.0');
  });
});
