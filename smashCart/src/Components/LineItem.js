import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SpacedGroup } from '@smashgg/gg-components';
import { Grid } from '@smashgg/gg-components';
import { GridCell } from '@smashgg/gg-components';
import { ImageIcon } from '@smashgg/gg-components';
import { PlainButton } from '@smashgg/gg-components';
import { Button } from '@smashgg/gg-components';
import '@smashgg/gg-components/dist/main.css';

class LineItem extends Component {
  static defaultProps ={
    sizes: ['X Small', 'Small', 'Medium', 'Large', 'X Large', 'XX Large', 'XXX Large', 'XXXX Large'] //gives categories to select list
  }
  deleteCart(id){
    this.props.onDelete(id);
  }

  toggleEditCart(item){
    this.props.onToggleEdit(item);
  }

  submitEdit(item){
    item.qty = this.refs.qty.value;
    item.size = this.refs.size.value;
    item.tag = this.refs.tag.value;
    console.log("LineItem: "+item);
    this.props.onSubmitEdit(item);
    this.props.onToggleEdit(item);
  }

  render() {
    let sizeOptions = this.props.sizes.map(size => {
      return <option key={size} value={size}>{size}</option>
    });

    if(this.props.cart.type === "Clothing"){
      const qtyFieldId = "qtyField"+this.props.cart.id;
      const sizeFieldID = "sizeField"+this.props.cart.id;
      const tagFieldId = "tagField"+this.props.cart.id;
      return (
        <div className="Cart">      
          <Grid hasGutter>
            <GridCell size={1}><ImageIcon alt="The Testing of Pelham 123..." url={this.props.cart.image} rounded size="xs" /></GridCell>
            <div>
              <strong>{this.props.cart.name}</strong>
              <SpacedGroup className="demoSpacedGroup demoHrz" direction="horizontal">
                  <div>Qty. {this.props.cart.qty} &#9679; {this.props.cart.size} </div>
                  <div><PlainButton onClick={this.toggleEditCart.bind(this, this.props.cart)} type="primary">Edit</PlainButton></div>
                  <div><PlainButton onClick={this.deleteCart.bind(this, this.props.cart.id)} type="destructive">Remove</PlainButton></div>            
              </SpacedGroup>     
              <span style={{color: 'gray'}} className="detail-text"><small>Fulfilled by {this.props.cart.fulfiller}</small></span> 
              {this.props.cart.displayEditor ? (
                <div className="EditClothing">      
                  <SpacedGroup className="demoSpacedGroup demoHrz" direction="horizontal">
                    <div>
                      <label>Qty.</label><br/>
                      <input id={qtyFieldId} type ="text" ref="qty" placeholder={this.props.cart.qty} />
                    </div>    
                    <div>
                    <label>Size</label><br/>
                    <select ref="size">{sizeOptions}</select>
                    </div>        
                    <div>
                      <label>Custom Tag</label><br/>
                      <input id={tagFieldId} type="text" ref="tag" placeholder={this.props.cart.tag} />
                    </div>              
                  </SpacedGroup>   
                  <SpacedGroup className="demoSpacedGroup demoHrz" direction="horizontal">
                    <Button label="Save" size="xs" onClick={this.submitEdit.bind(this, this.props.cart)}/>
                    <Button label="Cancel" type="secondary" size="xs" onClick={this.toggleEditCart.bind(this, this.props.cart)}/>
                  </SpacedGroup>
                </div> 
                ) : ("")}     
            </div>
            <GridCell size={1}>{this.props.cart.price == 0 ? (<span style={{color: 'green'}}><strong>FREE</strong></span>) : (<strong>${this.props.cart.price}</strong>)}
            </GridCell>
          </Grid>
        </div>     
      );
    }else if(this.props.cart.type === "Donation"){
      return (
        <div className="Cart">      
          <Grid hasGutter>
            <GridCell size={1}><ImageIcon alt="The Testing of Pelham 123..." url={this.props.cart.image} rounded size="xs" /></GridCell>
            <div>
              <strong>{this.props.cart.name}</strong>
              <SpacedGroup className="demoSpacedGroup demoHrz" direction="horizontal">
                  <div>Qty. {this.props.cart.qty} &#9679;</div>
                  <div><PlainButton onClick={this.deleteCart.bind(this, this.props.cart.id)} type="destructive">Remove</PlainButton></div>            
              </SpacedGroup>     
              <span style={{color: 'gray'}} className="detail-text"><small>Fulfilled by {this.props.cart.fulfiller}</small></span>              
            </div>
            <GridCell size={1}><strong>${this.props.cart.price}</strong></GridCell>
          </Grid>
        </div>     
      );
    }else if(this.props.cart.type === "Badge"){
      return (
        <div className="Cart">      
          <Grid hasGutter>
            <GridCell size={1}><ImageIcon alt="The Testing of Pelham 123..." url={this.props.cart.image} rounded size="xs" /></GridCell>
            <div>
              <strong>{this.props.cart.name}</strong>
              <SpacedGroup className="demoSpacedGroup demoHrz" direction="horizontal">
                  <div>Qty. {this.props.cart.qty} &#9679;</div>
                  <div><PlainButton onClick={this.deleteCart.bind(this, this.props.cart.id)} type="destructive">Remove</PlainButton></div>            
              </SpacedGroup>     
              <span style={{color: 'gray'}} className="detail-text"><small>Fulfilled by {this.props.cart.fulfiller}</small></span>              
            </div>
            <GridCell size={1}><strong>${this.props.cart.price}</strong></GridCell>
          </Grid>
        </div>     
      );
    }
    else{
      return ("");
    }
  }
}

LineItem.propTypes = { //validation
  cart: PropTypes.object,
  onDelete: PropTypes.func,
  onToggleEdit: PropTypes.func
}

export default LineItem;