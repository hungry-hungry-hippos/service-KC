import React from 'react';
import Enzyme from 'enzyme';
import GTKOrderItem, { GTKOrderItemImage, GTKOrderItemText } from './gTKOrderItem';

describe('Rendering', () => {
  let testData;
  let wrapper;

  beforeAll(() => {
    testData = {
      name: 'Sizzling bacon',
      icon: 'https://storage.googleapis.com/zagat-top-places/Peter_Luger_Bacon._Noah_Deveraux.jpg?max-w=305&auto=format',
    };

    wrapper = Enzyme.shallow(<GTKOrderItem item={testData} />);
  });

  it('should render props correctly', () => {
    expect(wrapper.find(GTKOrderItemImage).render().css('background-image')).toBe(`url(${testData.icon})`);
    expect(wrapper.find(GTKOrderItemText).render().text()).toBe(testData.name);
  });
});
