import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineItem from './LineItem';
import { Well } from '@smashgg/gg-components';
import { SpacedGroup } from '@smashgg/gg-components';
import { Grid } from '@smashgg/gg-components';
import '@smashgg/gg-components/dist/main.css';

class Cart extends Component {

  deleteLineItem(id){
    this.props.onDelete(id);
  }

  toggleEditLineItem(item){
    this.props.onToggleEdit(item);
  }

  submitEditLineItem(item){
    console.log("Cart: "+item);
    console.log("Submitting this item: "+ item);
    this.props.onSubmitEdit(item);
  }

  render() {
    let lineItems;
    if(this.props.cart){
      lineItems = this.props.cart.map(cart => {
        return(
          <LineItem onToggleEdit={this.toggleEditLineItem.bind(this)} onSubmitEdit={this.submitEditLineItem.bind(this)} onDelete={this.deleteLineItem.bind(this)} key={cart.id} cart = {cart} />
        );
      });
    }

    return (
      <div className="Cart">
        <h3>Shopping Cart</h3> 
          <Well isInset>
            <SpacedGroup className="demoSpacedGroup demoVrt" hasBorderBetween>{lineItems}</SpacedGroup>                    
          </Well>
        
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
