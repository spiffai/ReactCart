import React, { Component } from 'react';
import uuid from 'uuid';
//import $ from 'jquery';
import Cart from './Components/Cart';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      cart: [],
      lineItemTypes: {}
    }
  }

  ////For API Call
  // getCartFromAPI(){
  //   $.ajax({
  //     url: '',
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({cart : data}, function(){
  //         console.log(this.state);
  //       });
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //     }
  //   });
  // }

  getCart(){
    this.setState({cart:[
      {
        id:uuid.v4(),
        name: 'Hoodie',
        image: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        price: '60.00',
        qty: '1',
        type: 'Clothing',
        fulfiller: 'smash.gg'       
      },
      {
        id:uuid.v4(),
        name: 'Genesis 5 Pin',
        image: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        price: '30.00',
        qty: '1',
        type: 'Badge',
        fulfiller: 'smash.gg'
      }
    ]});
  }

  getLineItemTypes(){
    this.setState({
      lineItemTypes: {
        CLOTHING: 'Clothing',
        BADGE: 'Badge',
        DONATION: 'Donation'
      }
    })
  }

  //lifecycle method - fires off when the component is re-rendered
  componentWillMount(){
    //this is also where you'd fetch data from an API -- or in componentDidMount
    this.getCart();
    this.getLineItemTypes();
  }

  ////For API Call
  // componentDidMount(){
  //   this.getCartFromAPI();
  // }

  handleDeleteCart(id){
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    this.setState({cart:cart});
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Cart cart={this.state.cart} onDelete={this.handleDeleteCart.bind(this)} />
      </div>
    );
  }
}

export default App;
