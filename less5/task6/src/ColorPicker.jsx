import React, { Component } from 'react';
import './index.scss';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  nameColorHandler(nameColor) {
    this.setState({
      color: nameColor,
    });
  }
  clearColorHandler() {
    this.setState({
      color: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseMove={() => this.nameColorHandler('Coral')}
            onMouseLeave={() => this.clearColorHandler()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseMove={() => this.nameColorHandler('Aqua')}
            onMouseLeave={() => this.clearColorHandler()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseMove={() => this.nameColorHandler('Bisque')}
            onMouseLeave={() => this.clearColorHandler()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
