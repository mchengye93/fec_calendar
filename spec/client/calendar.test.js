import React from 'react';
import { shallow } from 'enzyme';


import Calendar from '../../client/src/components/Calendar.jsx';


describe('Calendar', () => {
  const listingArr = [{
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
       '2019-08-10',
       '2019-10-21',
       '2019-10-24',
       '2019-10-25',
       '2019-10-29',
       '2019-10-30',
       '2019-10-31',
       '2020-02-14',
       '2020-02-18',
       '2020-02-19',
       '2020-02-22',
       '2020-02-24',
       '2020-04-03',
       '2020-04-04',
       '2020-04-05',
       '2020-05-28',
       '2020-06-01',
       '2020-06-02'],
    minNights: 1,
    maxNights: 36,
  }];
  it('Calendar components should be defined', () => {
    const calendar = shallow(<Calendar listing={listingArr} />);
    expect(calendar.exists()).toBe(true);


    // expect(wrapper.find(Calendar)).to.have.lengthOf(1);
  });
});
