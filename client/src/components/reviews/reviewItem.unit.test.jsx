import React from 'react';
import Enzyme from 'enzyme';
import ReviewItem, { ReviewContent, ReviewDate } from './reviewItem';

describe('Rendering', () => {
  let testData;
  let shortDesc;
  let wrapper;
  let testDataShort;
  let wrapperShort;

  beforeAll(() => {
    testData = {
      restaurantId: 1,
      name: 'Benny Stanley',
      image: 'https://lh5.googleusercontent.com/-b_7KOG_FH3o/AAAAAAAAAAI/AAAAAAAAAK0/ASwrkoxefD8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
      rank: '8',
      date: 'December 23, 2018',
      stars: '4.5',
      description: 'Messenger bag affogato copper mug marfa. Fixie succulents banh mi butcher af kickstarter master cleanse echo park salvia. Af raclette thundercats, tumeric next level schlitz kombucha asymmetrical live-edge adaptogen etsy. IPhone portland etsy neutra. Normcore kitsch jean shorts, pop-up organic pok pok fashion axe lumbersexual portland actually YOLO enamel pin. DIY shoreditch meditation echo park fingerstache cronut.',
    };

    shortDesc = 'Messenger bag affogato copper mug marfa. Fixie succulents banh mi butcher af kickstarter master cleanse echo park salvia. Af raclette thundercats, tumeric next level schlitz kombucha asymmetrical live-edge adaptogen etsy. IPhone portland etsy';

    wrapper = Enzyme.shallow(<ReviewItem review={testData} />);

    testDataShort = {
      restaurantId: 1,
      name: 'Benny Stanley',
      image: 'https://lh5.googleusercontent.com/-b_7KOG_FH3o/AAAAAAAAAAI/AAAAAAAAAK0/ASwrkoxefD8/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg?h=72&w=72&mask=ellipse&auto=format',
      rank: '8',
      date: 'December 23, 2018',
      stars: '4.5',
      description: 'Leeloo',
    };

    wrapperShort = Enzyme.shallow(<ReviewItem review={testDataShort} />);
  });

  it('should have dispDescription state', () => {
    expect(wrapper.state().dispDescription).not.toBeUndefined();
  });

  it('should start with long descriptions shortened', () => {
    expect(wrapper.find('.ReviewText').render().text().trim()).toBe(shortDesc);
  });

  it('should toggle long descriptions correctly', () => {
    wrapper.find(ReviewContent).simulate('click');
    expect(wrapper.find('.ReviewText').render().text().trim()).toBe(testData.description);
  });

  it('should always show short descriptions', () => {
    expect(wrapperShort.find('.ReviewText').render().text().trim()).toEqual(testDataShort.description);
    wrapperShort.find(ReviewContent).simulate('click');
    expect(wrapperShort.find('.ReviewText').render().text().trim()).toEqual(testDataShort.description);
  });

  it('should render all remaining props correctly', () => {
    expect(wrapper.find('img').render().attr('src')).toEqual(testData.image);
    expect(wrapper.find('.ReviewName').render().text()).toEqual(testData.name);
    expect(wrapper.find(ReviewDate).render().text()).toEqual(testData.date);
  });
});
