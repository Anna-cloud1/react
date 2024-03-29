import React, { Component, useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
  const [localTime, setOffset] = useState(moment(getTimeWithOffset(offset)).format('LTS'));

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(moment(getTimeWithOffset(offset)).format('LTS'));
    }, 1000);

return () => clearInterval(interval);

  }, []);


  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{localTime}</div>
    </div>
  );
};

// class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       offset: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         offset: moment(getTimeWithOffset(this.props.offset)).format('LTS'),
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
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

export default Clock;
