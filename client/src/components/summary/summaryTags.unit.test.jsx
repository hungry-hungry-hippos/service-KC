import React from 'react';
import Enzyme from 'enzyme';
import TagList from './summaryTags';

describe('Rendering', () => {
  let testData;
  let wrapper;
  let wrapperEmpty;

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
    wrapper = Enzyme.shallow(<TagList id={testData.restaurantId} tags={testData.tags} />);
    wrapperEmpty = Enzyme.shallow(<TagList id={testData.restaurantId} />);
  });

  it('uses the props correctly', () => {
    expect(wrapper.find('#summaryTags').render().find('a')).toHaveLength(3);
  });

  it('should not render when no data in props', () => {
    expect(wrapperEmpty.render().text()).toEqual('');
  });
});
