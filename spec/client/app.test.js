import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/src/components/App.jsx';

import Calendar from '../../client/src/components/Calendar.jsx';


describe('App', () => {
  it('<App/> components should be defined', () => {
    const wrapper = shallow(<App />);
    expect(App).toBeDefined();
    console.log(wrapper.find(Calendar));
    // expect(wrapper.find(Calendar)).to.have.lengthOf(1);
  });
});
