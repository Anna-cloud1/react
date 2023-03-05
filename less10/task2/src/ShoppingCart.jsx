import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';


class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          id: '1',
          name: 'iPhone 11',
          price: 999,
        },
        {
          id: '2',
          name: 'iPad Pro',
          price: 799,
        },
      ],
    };
  }

  render() {
  const { userData } = this.props;
  const { cartItems } = this.state;

  const count = this.state.cartItems.length;

  return (
    <div className="column">
      <CartTitle userData={userData} count={count} />
      <ProductsList cartItems={cartItems} />
    </div>
  );
  }
}


export default ShoppingCart;
  