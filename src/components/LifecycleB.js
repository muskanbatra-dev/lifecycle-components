import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'muskan'
      }
    }
    static getderivedState (props,state){
        console.log("LifecycleB.getderivedState(props,state)")
        return null;
    }
    componentDidMount(){
        console.log("LifecycleB.componentDidMount")
    }
  render() {
    console.log("LifecycleB.render")
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB