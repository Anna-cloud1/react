import React, { Component, startTransition } from 'react';
import Info from './Info';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends Component {
  state = {
    text: null,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: null,
  //   };
  // }

  setText = text => {
    this.setState({
      text,
    });
  };
  render() {
    return (
      <div className="page">
        <Info text={this.state.text} />
        <div className="actions">
          <button
            className="btn"
            onClick={() => this.setText('Price is 500$. Available in 2 colors')}
          >
            Iphone 13
          </button>
          <button className="btn" onClick={() => this.setText('Price is 650$. Not available')}>
            Iphone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setText(null)}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
