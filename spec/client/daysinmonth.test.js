import React from 'react';
import { shallow, mount } from 'enzyme';


import DaysInMonth from '../../client/src/components/DaysInMonth.jsx';


describe('DaysInMonth', () => {
  const listing = {
    listingId: 0,
    bookings:
         ['2019-06-15',
           '2019-06-17',
           '2019-06-19',
           '2019-06-23',
           '2019-06-24',
           '2019-06-25',
           '2019-06-26',
           '2019-06-27',
           '2019-08-07',
           '2019-08-10'],
    minNights: 1,
    maxNights: 36,
  };
  it('<DaysInMonth/> components should be defined', () => {
    const daysInMonth = shallow(<DaysInMonth listing={listing} />);
    const { highLightDate } = daysInMonth.state();


    expect(daysInMonth.exists()).toBe(true);

    expect(highLightDate).toBeDefined();
    expect(highLightDate).toBeNull();
  });
});
