import React from 'react';
import Enzyme from 'enzyme';
import Reviews from './reviews';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeEach(() => {
    testData = [{
      restaurantId: 1,
      name: 'Benny Stanley',
      image: 'https://lh5.googleusercontent.com/-b_7KOG_FH3o/AAAAAAAAAAI/AAAAAAAAAK0/ASwrkoxefD8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
      rank: '8',
      date: 'December 23, 2018',
      stars: '4.5',
      description: 'Messenger bag affogato copper mug marfa. Fixie succulents banh mi butcher af kickstarter master cleanse echo park salvia. Af raclette thundercats, tumeric next level schlitz kombucha asymmetrical live-edge adaptogen etsy. IPhone portland etsy neutra. Normcore kitsch jean shorts, pop-up organic pok pok fashion axe lumbersexual portland actually YOLO enamel pin. DIY shoreditch meditation echo park fingerstache cronut.',
    }, {
      restaurantId: 1,
      name: 'Benny Stanley',
      image: 'https://lh5.googleusercontent.com/-b_7KOG_FH3o/AAAAAAAAAAI/AAAAAAAAAK0/ASwrkoxefD8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
      rank: '8',
      date: 'December 23, 2018',
      stars: '4.5',
      description: 'Messenger bag affogato copper mug marfa. Fixie succulents banh mi butcher af kickstarter master cleanse echo park salvia. Af raclette thundercats, tumeric next level schlitz kombucha asymmetrical live-edge adaptogen etsy. IPhone portland etsy neutra. Normcore kitsch jean shorts, pop-up organic pok pok fashion axe lumbersexual portland actually YOLO enamel pin. DIY shoreditch meditation echo park fingerstache cronut.',
    }];
    testData.json = () => testData;
    global.fetch = jest.fn(() => new Promise(resolve => resolve(testData)));
    wrapper = Enzyme.shallow(<Reviews id={1} />);
  });

  it('has the right props', () => {
    expect(wrapper.instance().props.id).toBe(1);
  });

  it('calls fetch with the right data', () => {
    expect(global.fetch.mock.calls.length).toBe(1);
    expect(global.fetch.mock.calls[0][0]).toBe('/reviews/1');
  });

  it('sets state correctly', () => {
    wrapper.setState({ restaurant: testData }, () => {
      expect(wrapper.state('reviews')).toEqual(testData);
    });
  });
});
