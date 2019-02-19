import React from 'react';
import Enzyme from 'enzyme';
import GTKOrderList from './gTKOrderList';
import GTKOrderItem from './gTKOrderItem';

describe('Rendering', () => {
  let testData;
  let wrapper;
  let wrapperEmpty;

  beforeAll(() => {
    testData = [
      {
        name: 'Sizzling bacon',
        icon: 'https://storage.googleapis.com/zagat-top-places/Peter_Luger_Bacon._Noah_Deveraux.jpg?max-w=305&auto=format',
      },
      {
        name: 'Tuna tartare',
        icon: 'https://storage.googleapis.com/zagat-top-places/2014-10-new-york-city/GothamBarandGrill_TunaTartare_2.jpg?max-w=305&auto=format',
      },
    ];

    wrapper = Enzyme.shallow(<GTKOrderList whatToOrder={testData} />);
    wrapperEmpty = Enzyme.shallow(<GTKOrderList whatToOrder={[]} />);
  });

  it('should render props correctly', () => {
    expect(wrapper.find('#GTKOrderList').find(GTKOrderItem)).toHaveLength(2);
  });

  it('should not render when no data in props', () => {
    expect(wrapperEmpty.render().text()).toEqual('');
  });
});
