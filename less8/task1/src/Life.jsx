import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log(nextProp, nextState);
    console.log('shouldComponentUpdate');
    return nextProp.number % 2;
  }


componentDidUpdate() {
   console.log('componentDidUpdate')
}

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return <div>{this.props.number}</div>;
  }
}

export default Life;
