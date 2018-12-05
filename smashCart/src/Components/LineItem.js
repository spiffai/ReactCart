import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import { Banner } from '@smashgg/gg-components';

class LineItem extends Component {
  deleteCart(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <div className="Cart">
        <Banner>This is the primary banner. This is also the default.</Banner>
        <Banner type="secondary">This is the secondary banner.</Banner>
      </div>       
    );
  }
}

LineItem.propTypes = { //validation
  cart: PropTypes.object,
  onDelete: PropTypes.func
}

export default LineItem;