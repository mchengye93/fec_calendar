import React from 'react';
import moment from 'moment';

import WeekDays from './WeekDays.jsx';
import DaysInMonth from './DaysInMonth.jsx';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      listing: {},
      dateObject: moment(),
      nextMonth: moment().add(1, 'months'),
    };


    this.backwardMonth = this.backwardMonth.bind(this);
    this.forwardMonth = this.forwardMonth.bind(this);

    this.month = this.month.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }

  componentDidMount() {

  }

  backwardMonth() {
    this.setState({ dateObject: this.state.dateObject.subtract(1, 'months') });
    this.setState({ nextMonth: this.state.nextMonth.subtract(1, 'months') });
  }


  // change current month to next
  forwardMonth() {
    this.setState({ dateObject: this.state.dateObject.add(1, 'months') });
    this.setState({ nextMonth: this.state.nextMonth.add(1, 'months') });
  }


  month() {
    return this.state.dateObject.format('MMMM YYYY');
  }

  nextMonth() {
    return this.state.nextMonth.format('MMMM YYYY');
  }

  render() {
    // console.log('this.state.listing', this.state.listing);

    // console.log(this.props.listing);
    return (
      <div>
        <div><strong>Availability</strong></div>
        <div>
          <span>5 nights mimimum stay · Updated today</span>
          <span><button>Clear Dates</button></span>
        </div>
        <button onClick={this.backwardMonth}> Back </button>
        <button onClick={this.forwardMonth}> Forward </button>
        <div className="current-month-calendar">
          <div className="calendar-navi">
            {this.month()}
          </div>
          <table className="calendar-day">
            <WeekDays />
            <DaysInMonth month={this.state.dateObject} listing={this.props.listing} />
          </table>
        </div>
        <div className="current-month-calendar">
          <div className="calendar-navi">
            {this.nextMonth()}
          </div>
          <table className="next-calendar-day">
            <WeekDays />
            <DaysInMonth month={this.state.nextMonth} listing={this.props.listing} />
          </table>
        </div>

      </div>
    );
  }
}

export default Calendar;
