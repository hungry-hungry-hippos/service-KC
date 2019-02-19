import React from 'react';
import Enzyme from 'enzyme';
import GTKArticleItem, { GTKArticleImage, GTKArticleSpan } from './gTKArticleItem';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeAll(() => {
    testData = {
      restaurantIds: [
        40,
        100,
        94,
        71,
        47,
        84,
        4,
        1,
        22,
        46,
      ],
      name: 'Stones Throw Remixes Toad in The Hole',
      image: 'https://zagat-user.imgix.net/Saru_Sushi_Cracker-Virginia_Miller.jpg?fit=crop&crop=center&max-h=600&max-w=600&q=75&fm=jpg&auto=format',
    };

    wrapper = Enzyme.shallow(<GTKArticleItem article={testData} id={1} />);
  });

  it('should render props correctly', () => {
    expect(wrapper.find(GTKArticleImage).render().css('background-image')).toEqual(`url(${testData.image})`);
    expect(wrapper.find(GTKArticleSpan).render().text()).toEqual(testData.name);
  });
});
