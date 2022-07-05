import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'muskan'
      }
    }
    static getderivedState (props,state){
        console.log("LifecycleA.getderivedState(props,state)")
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA.componentDidMount")
    }
  render() {
    console.log("LifecycleA.render")
    return (
      <div>
        LifecycleA
        <LifecycleB></LifecycleB>

      </div>
    )
  }
}

export default LifecycleA