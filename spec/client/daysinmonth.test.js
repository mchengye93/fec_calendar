import React from 'react';
import { shallow, mount } from 'enzyme';


import DaysInMonth from '../../client/src/components/DaysInMonth.jsx';

describe('DaysInMonth', () => {
  it('<DaysInMonth/> components should be defined', () => {
    const daysInMonth = shallow(<DaysInMonth />);
    const { highLightDate } = daysInMonth.state();
    const { dateObject } = daysInMonth.state();

    expect(daysInMonth.exists()).toBe(true);

    expect(highLightDate).toBeDefined();
    expect(highLightDate).toBeNull();

    expect(dateObject).toBeDefined();
  });
});
