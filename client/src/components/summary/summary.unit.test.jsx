import React from 'react';
import Enzyme from 'enzyme';
import Summary, { SummaryTitle, SummarySubtitle } from './summary';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeEach(() => {
    testData = {
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
      ],
    };
    testData.json = () => testData;
    global.fetch = jest.fn(() => new Promise(resolve => resolve(testData)));
    wrapper = Enzyme.shallow(<Summary id={1} />);
  });

  it('has the right props', () => {
    expect(wrapper.instance().props.id).toBe(1);
  });

  it('calls fetch with the right data', () => {
    expect(global.fetch.mock.calls.length).toBe(1);
    expect(global.fetch.mock.calls[0][0]).toBe('/restaurants/1');
  });

  it('sets state correctly', () => {
    wrapper.setState({ restaurant: testData }, () => {
      expect(wrapper.state('restaurant')).toEqual(testData);
      expect(wrapper.find(SummaryTitle).render().text()).toEqual('Test');
      expect(wrapper.find(SummarySubtitle).render().text()).toEqual('Test headline');
    });
  });
});
