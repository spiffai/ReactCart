import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddDonation extends Component {
  constructor(){
      super();
      this.state = {
          newDonation:{}
      }
  }

  handleSubmit(e){
      if(this.refs.price.value=== ''){
          alert('value is required');
      } else{
          this.setState({newDonation:{
              id: uuid.v4(),
              name: "Donation",
              image: "https://images.smash.gg/images/tournament/10823/image-b4ddaf7c53ad2503c2330edda6831d20.jpg",
              price: this.refs.price.value,
              type: "Donation",
              fulfiller: "smash.gg",
              qty: 1
              //category: this.refs.category.value
          }}, function(){
              //callback function
              this.props.addDonation(this.state.newDonation);
          });
      }
      e.preventDefault();
  }

  render() {
    return (
      <div>
      <h3>Add Donation</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
              <label>Amount</label><br/>
              <input type ="text" ref="price" />
          </div>
          <br/>
          <input type="submit" value="submit" />
          <br/>
      </form>
      </div>
    );
  }
}

AddDonation.propTypes = { //validation
    addDonation: PropTypes.func
  }

export default AddDonation;
