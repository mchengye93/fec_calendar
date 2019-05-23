import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  width: '40px',
  height: '39px',
  background: 'repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px)',
  color: 'rgb(0, 0, 0)',
  border: '2px solid rgb(255, 255, 255)',
  borde-radius: '7px ',
  padding: '0px',

`;

const bookedTd = {
  width: '40px',
  height: '39px',
  background: 'repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(255, 255, 255) 3px, rgb(235, 235, 235) 3px, rgb(235, 235, 235) 4px)',
  color: 'rgb(0, 0, 0)',
  border: '2px solid rgb(255, 255, 255)',
  borderRadius: '7px ',
  padding: '0px',
};

const div1 = {
  height: '38px',
  position: 'relative',
  width: '38px',
  margin: '0px',
};

const div2 = {
  paddingBottom: '13px',
  paddingTop: '13px',
  fontSize: '14px',

};

const bookedDiv = {
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  fontWeight: '700',
  height: '12px',
  lineHeight: '12px',
  textAlign: 'center',
  width: '38px',
  color: 'rgb(216, 216, 216)',
};


const clickedTd = {
  width: '40px',
  height: '39px',
  background: 'rgb(0, 132, 137)',
  color: 'rgb(0, 0, 0)',
  border: '2px solid rgb(255, 255, 255)',
  borderRadius: '7px',
  padding: '0px',

};

const clickedDiv = {
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  fontWeight: '700',
  height: '12px',
  lineHeight: '12px',
  textAlign: 'center',
  width: '38px',
  color: 'rgb(255, 255, 255)',
};

const availableTd = {
  width: '40px',
  height: '39px',
  background: 'rgb(237, 246, 246)',
  color: 'rgb(0, 132, 137)',
  border: '2px solid rgb(255, 255, 255)',
  borderRadius: '7px',
  padding: '0px',
};

const availableDiv = {
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  fontWeight: '700',
  height: '12px',
  lineHeight: '12px',
  textAlign: 'center',
  width: '38px',
  color: 'rgb(0, 132, 137)',
};

const highLightTd = {
  width: '40px',
  height: '39px',
  background: 'rgb(237, 246, 246)',
  color: 'rgb(0, 132, 137)',
  border: '2px solid rgb(255, 255, 255)',
  borderRadius: '7px',
  padding: '0px',
  background: 'rgb(204,238,235)',
};

const minNightsDiv = {
  fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  fontWeight: '700',
  height: '12px',
  lineHeight: '12px',
  textAlign: 'center',
  width: '38px',
  color: 'rgb(255, 255, 255)',
};

const minNightsTd = {
  width: '40px',
  height: '39px',
  background: 'rgb(237, 246, 246)',
  color: 'rgb(255, 255, 255)',
  border: '2px solid rgb(255, 255, 255)',
  borderRadius: '7px',
  padding: '0px',
  background: 'rgb(204,238,235)',
};

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: false,
      checkDate: null,
    };
    this.checkDate = this.checkDate.bind(this);

    this.mouseOutCheck = this.mouseOutCheck.bind(this);
    this.mouseOverCheck = this.mouseOverCheck.bind(this);
  }

  checkDate(e) {
    // if click date same as checkin date ignore it
    if (this.props.checkInDate !== this.props.checkDate) {
      this.props.setCheckIn(this.props.checkDate);
    }
  }

  mouseOverCheck(e) {
    this.setState({ highLight: true });
    if (this.props.checkInDate === this.props.checkDate) {
      console.log('hey highlight min nights!');
      this.props.minNights();
    }
  }

  mouseOutCheck(e) {
    this.setState({ highLight: false });
    if (this.props.checkInDate === this.props.checkDate) {
      console.log('hey mouseout  no highlight min nights!');
      this.props.noMinNights();
    }
  }

  render() {
    // console.log(this.props.minNights);
    // console.log(this.props.checkInDate);

    let tdStyling = minNightsTd;
    let divStyling = minNightsDiv;
    console.log(this.props.highLight);
    if (this.props.highLight) {
      return (
        <td
          onClick={this.checkDate}
          style={tdStyling}
          key={this.props.d}
          className="calendar-day"
          onMouseOver={this.mouseOverCheck}
          onMouseOut={this.mouseOutCheck}
        >
          <div style={div1}>
            <div style={div2}>
              <div style={divStyling}>{this.props.d}</div>
            </div>
          </div>
        </td>
      );
    }


    if (this.props.booked === 'true') {
      // console.log('inside true!');
      return (
        <td style={bookedTd} key={this.props.d} className="calendar-day booked">
          <div style={div1}>
            <div style={div2}>
              <div style={bookedDiv}>{this.props.d}</div>
            </div>
          </div>
        </td>
      );
    }

    tdStyling = this.props.selected ? clickedTd : availableTd;
    divStyling = this.props.selected ? clickedDiv : availableDiv;

    return (
      <td onClick={this.checkDate} style={tdStyling} key={this.props.d} className="calendar-day">
        <div style={div1}>
          <div style={div2}>
            <div style={divStyling}>{this.props.d}</div>
          </div>
        </div>
      </td>
    );
  }
}
export default Day;
