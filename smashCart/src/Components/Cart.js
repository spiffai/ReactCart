import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineItem from './LineItem';

class Cart extends Component {

  deleteLineItem(id){
    this.props.onDelete(id);
  }

  render() {
    let lineItems;
    if(this.props.cart){
      lineItems = this.props.cart.map(cart => {
        return(
          <LineItem onDelete={this.deleteLineItem.bind(this)} key={cart.id} cart = {cart} />
        );
      });
    }

    return (
      <div className="Cart">
      <h3>Shopping Cart</h3>
      {lineItems}
      {/* {this.props.test} */}
      </div>
    );
  }
}

Cart.propTypes = { //validation
  cart: PropTypes.array,
  onDelete: PropTypes.func
}

export default Cart;
