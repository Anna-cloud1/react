import React, { Component } from 'react';
import './clock.scss';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

// class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       offset: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
//     };

//     //  setInterval(() => {
//     //   this.setState({
//     //     offset: this.state.offset + 1,
//     //   });
//     // }, props.interval);
  
//   }
//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{this.state.offset}</div>
//       </div>
//     );
//   }
// }



class Clock extends Component {
  constructor(props) {
    super(props);

    this.state: {

    }
  }

    render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.props.location}</div>
        <div className="clock__time">{this.state.offset}</div>
      </div>
    );
  }
}

export default Clock;
