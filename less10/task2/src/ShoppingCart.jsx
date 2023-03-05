import React, { Component } from 'react';
import ProductsList from './ProductsList';
import CartTitle from './CartTitle';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          id: '1',
          name: 'iPhone 13',
          price: 699,
        },
        {
          id: '2',
          name: 'iPad Pro',
          price: 799,
        },
        {
          id: 3,
          name: 'iPhone 14 Pro Max Purple',
          price: 900,
        },
      ],
    };
  }

  render() {
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}


export default ShoppingCart;
  