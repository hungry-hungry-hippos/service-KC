import React from 'react';
import Enzyme from 'enzyme';
import { GTKHeader } from '../sharedStyledComponents';
import GTKArticleList, { GTKArticles, GTKShowMoreButton } from './gTKArticleList';
import GTKArticleItem from './gTKArticleItem';

describe('Rendering', () => {
  let testData;
  let wrapper;
  let wrapperShort;

  beforeAll(() => {
    testData = {
      name: 'Test',
      id: 1,
      articles: [{
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
      },
      {
        restaurantIds: [
          16,
          75,
          92,
          4,
          1,
          46,
        ],
        name: 'Best Brunches in San Francisco',
        image: 'https://zagat-user.imgix.net/list-hero-images/GettyImages-137737392.jpg?fit=crop&crop=center&max-h=600&max-w=600&q=75&fm=jpg&auto=format',
      },
      {
        restaurantIds: [
          16,
          75,
          92,
          4,
          1,
          46,
        ],
        name: 'Best Brunches in San Francisco',
        image: 'https://zagat-user.imgix.net/list-hero-images/GettyImages-137737392.jpg?fit=crop&crop=center&max-h=600&max-w=600&q=75&fm=jpg&auto=format',
      }],
    };

    wrapper = Enzyme.shallow(
      <GTKArticleList
        name={testData.name}
        id={testData.id}
        articles={testData.articles}
      />,
    );
    wrapperShort = Enzyme.shallow(
      <GTKArticleList
        name={testData.name}
        id={testData.id}
        articles={testData.articles.slice(0, 1)}
      />,
    );
  });

  it('should have showLength state', () => {
    expect(wrapper.state().showLength).not.toBeUndefined();
  });

  it('should start showing 2 articles', () => {
    expect(wrapper.find(GTKArticles).dive().find(GTKArticleItem)).toHaveLength(2);
  });

  it('should toggle long lists correctly', () => {
    wrapper.find(GTKShowMoreButton).simulate('click');
    expect(
      wrapper
        .find(GTKArticles)
        .dive()
        .find(GTKArticleItem),
    )
      .toHaveLength(testData.articles.length);
  });

  it('should show all short lists', () => {
    expect(wrapperShort.find(GTKArticles).dive().find(GTKArticleItem)).toHaveLength(1);
    expect(wrapperShort.find(GTKShowMoreButton)).toHaveLength(0);
  });

  it('should render all remaining props correctly', () => {
    expect(wrapper.find(GTKHeader).render().text()).toEqual(`Zagat Mentions Of ${testData.name}`);
  });
});
