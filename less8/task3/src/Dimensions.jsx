import React, { Component } from 'react';

class Dimension extends Component {
  state = {
    width: null,
    height: null,
  };


  onResize = e => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerHeight, innerWidth);
  };
  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;
    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.onResize);
  }
  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}

export default Dimension;
