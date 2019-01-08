import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllItems} from '../actions'

class List extends Component{
  componentDidMount(){
    this.props.getAllItems();
  }
  render(){
    return(
      <div>
        <div className="center">
            <h1>To Do List</h1>
            <h5 className="grey-text">Now with Redux!</h5>    
        </div>
    </div>
    )
  }
}

export default connect(null, {
  getAllItems: getAllItems
})(List);