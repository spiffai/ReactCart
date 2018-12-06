import React, { Component } from 'react';
import uuid from 'uuid';
//import $ from 'jquery';
import Cart from './Components/Cart';
import AddDonation from './Components/AddDonation';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      cart: [],
      lineItemTypes: {},
      editItemId: 0,
    }
  }

  getCart(){
    this.setState({cart:[
      {
        id:uuid.v4(),
        name: 'Hoodie',
        image: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        price: '60.00',
        qty: '1',
        type: 'Clothing',
        fulfiller: 'smash.gg',
        size: 'Medium',
        tag: 'w00t',
        displayEditor: false       
      },
      {
        id:uuid.v4(),
        name: 'T-Shirt',
        image: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        price: '25.00',
        qty: '1',
        type: 'Clothing',
        fulfiller: 'smash.gg',
        size: 'Medium',
        tag: 'w00t',
        displayEditor: false       
      },
      {
        id:uuid.v4(),
        name: 'Genesis 5 Pin',
        image: 'https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg',
        price: '30.00',
        qty: '1',
        type: 'Badge',
        fulfiller: 'smash.gg',
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

  // componentDidMount(){
  //   this.getToDos(); //API
  // }
  
  handleAddDonation(donation){
    console.log(donation);
    let cart = this.state.cart;
    cart.push(donation);
    this.setState({cart:cart});
  }

  handleDeleteCart(id){
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    this.setState({cart:cart});
  }

  handleSubmitEditedCart(item){
    console.log("App: "+item);
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === item.id);
    cart[index].qty = item.qty;
    cart[index].size = item.size;
    cart[index].tag = item.tag;
    this.setState({cart:cart});
  }

  handleToggleEdit(item){
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === item.id);
    for(var i=0;i<cart.length;i++){
      if(i != index){
        cart[i].displayEditor = false;
        this.setState({cart:cart});
      }      
    }
      cart[index].displayEditor = item.displayEditor == true? false : true;
      this.setState({cart:cart}); 
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">    
      <Cart cart={this.state.cart} onDelete={this.handleDeleteCart.bind(this)} onSubmitEdit={this.handleSubmitEditedCart.bind(this)} onToggleEdit={this.handleToggleEdit.bind(this)}/>
      <AddDonation cart={this.state.cart} addDonation={this.handleAddDonation.bind(this)}/>
      </div>
    );
  }
}

export default App;
