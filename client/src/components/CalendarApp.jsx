
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Calendar from './Calendar.jsx';


class CalendarApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
    };
    this.getBookings = this.getBookings.bind(this);
    this.blackOutDates = this.blackOutDates.bind(this);
  }

  componentDidMount() {
    this.getBookings(Math.floor(Math.random() * 100));
    console.log('components did mount');
  }

  getBookings(listingId) {
    // console.log(this.state);
    axios.get('http://ec2-18-219-161-100.us-east-2.compute.amazonaws.com/bookings', {
      params: {
        listingId,
      },
    })
      .then((results) => {
        // take results and add blackout dates according to minimum stay
        console.log(results.data[0]);
        this.blackOutDates(results.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  blackOutDates(list) {
    const { minNights } = list;

    const newBookings = list.bookings.slice();

    // check between each book date and if it is less than
    // min nights mark it as booked
    for (let i = 0; i < list.bookings.length - 1; i += 1) {
      const { bookings } = list;

      const current = moment(bookings[i]);
      const next = moment(bookings[i + 1]);

      const diffDays = next.diff(current, 'days');

      if (diffDays <= minNights) {
        for (let x = 1; x < diffDays; x += 1) {
          const blackOutDay = new Date(current);
          blackOutDay.setDate(blackOutDay.getDate() + x + 1);

          newBookings.push(`${moment(blackOutDay).format('YYYY-MM-DD')}T`);
        }
      }
    }
    list.bookings = newBookings.sort();

    this.setState({ listing: list });
  }

  render() {
    const calendarDiv = {
      boxSizing: 'border-box',
      color: 'rgb(72, 72, 72)',
      display: 'inline-block',
      fontFamily: 'Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif',
      fontSize: '14px',
      height: '467px',
      lineHeight: '20.02px',
      textSizeAdjust: '100%',
      verticalAlign: 'bottom',
      width: '648px',
    };

    const { listing } = this.state;
    return (


      <div style={calendarDiv}>
        <Calendar listing={listing} />
      </div>

    );
  }
}

export default CalendarApp;
