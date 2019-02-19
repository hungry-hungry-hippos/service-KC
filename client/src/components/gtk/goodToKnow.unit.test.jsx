import React from 'react';
import Enzyme from 'enzyme';
import GoodToKnow from './goodToKnow';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeEach(() => {
    testData = {
      restaurant: {
        restaurantId: 1,
        name: 'Test',
        headline: 'Test headline',
        tags: {
          search: 'Japanese',
          location: 'Inner Sunset',
          price: 1,
        },
        scores: {
          food: 4.5,
          decor: 3.9,
          service: 4,
        },
        description: "Purists are <b>“blown away”</b> by the <b>“traditional”</b> small plates – like <b>“staggeringly good”</b> yakitori and <b>“exceptional”</b> ramen in a <b>“delicious porky broth”</b> – at this <b>“cozy”</b> Inner Sunset Japanese that also pours <b>“amazing”</b> sakes; prices are moderate, and though you'll likely have to <b>“wait outside”</b> for a seat in the <b>“tiny”</b> space, fans say the <b>“friendly owner”</b> has captured <b>\"the true spirit of izakaya.\"</b>",
        knownFor: [
          {
            name: 'Dinner',
            icon: 'https://zagat.com/assets/knownfor/placeholder.svg',
          },
          {
            name: 'Takeout',
            icon: 'https://zagat.com/assets/knownfor/takeout.svg',
          },
        ],
        whatToOrder: [
          {
            name: 'Sizzling bacon',
            icon: 'https://storage.googleapis.com/zagat-top-places/Peter_Luger_Bacon._Noah_Deveraux.jpg?max-w=305&auto=format',
          },
          {
            name: 'Tuna tartare',
            icon: 'https://storage.googleapis.com/zagat-top-places/2014-10-new-york-city/GothamBarandGrill_TunaTartare_2.jpg?max-w=305&auto=format',
          },
        ],
        insiderTip: 'Biodiesel put a bird on it coloring book YOLO.',
      },
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
      }],
    };

    global.fetch = jest.fn((url) => {
      let retData;
      const endpoint = url.split('/')[1];
      if (endpoint === 'restaurants') {
        retData = testData.restaurant;
      } else if (endpoint === 'articles') {
        retData = testData.articles;
      }
      retData.json = () => retData;

      return new Promise(resolve => resolve(retData));
    });
    wrapper = Enzyme.shallow(<GoodToKnow id={1} />);
  });

  it('has the right props', () => {
    expect(wrapper.instance().props.id).toBe(1);
  });

  it('calls fetch with the right data', () => {
    expect(global.fetch.mock.calls.length).toBe(2);
    expect(global.fetch.mock.calls[0][0]).toBe('/restaurants/1');
    expect(global.fetch.mock.calls[1][0]).toBe('/articles/1');
  });

  it('sets state correctly', () => {
    wrapper.setState({ restaurant: testData.restaurant, articles: testData.articles }, () => {
      expect(wrapper.state('restaurant')).toEqual(testData.restaurant);
      expect(wrapper.state('articles')).toEqual(testData.articles);
    });
  });
});
