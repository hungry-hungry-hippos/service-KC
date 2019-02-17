import React from 'react';
import Enzyme from 'enzyme';
import ReviewList from './reviewList';

describe('Rendering', () => {
  let testData;
  let wrapper;
  let wrapperEmpty;

  beforeEach(() => {
    testData = {
      overall: '3',
      reviews: [{
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
      }],
    };
    wrapper = Enzyme.shallow(<ReviewList overall={testData.overall} reviews={testData.reviews} />);
    wrapperEmpty = Enzyme.shallow(<ReviewList />);
  });

  it('uses the props correctly', () => {
    expect(wrapper.find('#overallReviewScore').render().text().split(' ')[0]).toBe('3.0');
    expect(wrapper.find('#reviewItems').render().find('.ReviewItem')).toHaveLength(2);
  });

  it('should not render when no data in props', () => {
    expect(wrapperEmpty.render().text()).toEqual('');
  });
});
