import React, { Component } from 'react';
import Life from './Life.jsx';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.round(Math.random() * 100),
    };
  }
  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  update = () => {
    this.setState({
      number: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
      <div>
        <div>
          <button className="btn" onClick={this.show}>Show</button>
          <button className="btn" onClick={this.update}>Update</button>
          <button className="btn" onClick={this.hide}>Hide</button>
        </div>
        {this.state.visible && <Life number={this.state.number}/>}
      </div>
    );
  }
}

export default Demo;
