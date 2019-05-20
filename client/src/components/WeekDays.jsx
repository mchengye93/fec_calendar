import React from 'react';
import moment from 'moment';

const WeekDays = () => {
  const weekdayshort = moment.weekdaysShort();

  const weekdaysshortname = weekdayshort.map(day => (

    <th key={day} className="week-day">
      {day}
    </th>
  ));
  return (
    <thead>
      { weekdaysshortname }
    </thead>
  );
};
export default WeekDays;
