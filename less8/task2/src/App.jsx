import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
        {this.state.visible && <Clock location="Argentina" offset={3} />}
        {this.state.visible && <Clock location="Kyiv" offset={2} />}
        {this.state.visible && <Clock location="Madrid" offset={1} />}
      </div>
    );
  }
}

export default App;
