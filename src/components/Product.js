import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
      <div><Cart></Cart></div>
    )
  }
}

export default Product;



export class Cart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         qty:0
      }
    }
      updateQtry = ()=>{
        this.setState({qty: this.state.qty+1})
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
        <button onClick={this.updateQtry}>Update Quantity</button>
      </div>
    )
  }
}
