import React from 'react';
import moment from 'moment';


class DaysInMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateObject: this.props.month,
    };

    this.daysInMonth = this.daysInMonth.bind(this);
    this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
    this.daysInMonth = this.daysInMonth.bind(this);
    this.blanksDays = this.blanksDays.bind(this);
    this.totalSlots = this.totalSlots.bind(this);
  }

  firstDayOfMonth() {
    const { dateObject } = this.state;
    const firstDay = moment(dateObject).startOf('month').format('d');

    return firstDay;
  }


  daysInMonth() {
    const { dateObject } = this.state;
    const totalDaysInMonth = moment(dateObject).daysInMonth();


    const daysInMonth = [];
    for (let d = 1; d <= totalDaysInMonth; d += 1) {
      // const currentDay = d == this.currentDay() ? 'today' : '';
      daysInMonth.push(
        <td key={d} className="calendar-day ">{d}</td>,
      );
    }

    return daysInMonth;
  }

  blanksDays() {
    const blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i += 1) {
      blanks.push(
        <td className="calendar-day empty" />,
      );
    }
    return blanks;
  }

  totalSlots() {
    const blanks = this.blanksDays();
    const daysInMonth = this.daysInMonth();

    const totalSlots = [...blanks, ...daysInMonth];
    const rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    const daysinmonth = rows.map((d, i) => <tr>{d}</tr>);

    return daysinmonth;
  }


  render() {
    return (
      <tbody>
        {this.totalSlots()}
      </tbody>
    );
  }
}

export default DaysInMonth;
