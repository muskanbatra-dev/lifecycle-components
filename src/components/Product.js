import React, { Component } from 'react'

export class Product extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       ProductID:'',qty:0
    }
  }

  addToCart = (pid) =>{
    this.setState({ProductID:pid,qty: this.state.qty+1})
  }

  render() {
    return (
      <div>
        <button onClick={() =>{this.addToCart(1)}}>Add to Cart</button>
        <Cart ProductID={this.state.ProductID} qty={this.state.qty}></Cart>
      </div>
    )
  }
}

export default Product;



export class Cart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         qty:this.props.qty
      }
    }
    /*  updateQtry = ()=>{
        this.setState({qty: this.state.qty+1})
    }*/
/*we use getDerivedStateFromProps  where the state depends on changes in props over time. */
    static getDerivedStateFromProps (props,state){
      console.log(props.qty);
      console.log(state.qty);
      if(props.qty !== state.qty){
        return {qty : props.qty}
        
      }
      return null;
    }
      componentDidMount(){
        console.log("Execute after component render")
      };

      componentDidUpdate(prevprops , prevstates){
        console.log("Execute after component render")
      }
    
  render() {
    return (
      <div>
        <h1>CART: {this.state.qty}</h1>
        {/*<button onClick={this.updateQtry}>Update Quantity</button>*/}
      </div>
    )
  }
}
