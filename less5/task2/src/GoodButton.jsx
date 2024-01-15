import React from 'react';
import './index.scss';

class GoodButton extends React.Component {
  handleClick(event) {
    return alert(event.target.textContent);
  }
  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me now!
      </button>
    );
  }
}

export default GoodButton;
