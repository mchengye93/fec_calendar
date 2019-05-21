import React from 'react';
import axios from 'axios';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: {},
    };
    this.getBookings = this.getBookings.bind(this);
    this.blackOutDates = this.blackOutDates.bind(this);
  }

  componentDidMount() {
    this.getBookings(0);
  }

  getBookings(listingId) {
    // console.log(this.state);
    axios.get('/bookings', {
      params: {
        listingId,
      },
    })
      .then((results) => {
        // console.log(results);


        // take results and add blackout dates according to minimum stay
        this.blackOutDates(results.data[0]);
        // this.setState({ listing: results.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  blackOutDates(listing) {
    const airBbnb = listing;
    console.log(listing);
    // const minStay = listing.mi
  }

  render() {
    // console.log(this.state.listing);
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

    const inline = { display: 'inline-block' };
    const width = {
      display: 'inline-block',
      width: '100px',
    };
    return (


      <div style={calendarDiv}>
        <Calendar listing={this.state.listing} />
      </div>

    );
  }
}

export default App;
