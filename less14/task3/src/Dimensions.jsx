import React, { Component, useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });


useEffect(() => {
 const { innerHeight, innerWidth } = window;
 setDimensions({ width: innerWidth, height: innerHeight });

 const handleResize = e => {
    const { innerWidth, innerHeight } = e.target;
    setDimensions({ width: innerWidth, height: innerHeight });
  };
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);  
  }

}, [])


 const { width, height } = dimensions;


  return (<div className="dimensions">{`${width}px - ${height}px`}</div>);
};

// class Dimensions extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize);
   
//     this.
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }

  

//   setDimensions = ({ width, height }) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${innerWidth} x ${innerHeight}`;
//   };

//   render() {
//     const { width, height } = this.state;
//     return <div className="dimensions">{`${width}px - ${height}px`}</div>;
//   }
// }

export default Dimensions;
