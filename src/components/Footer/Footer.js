import React, { Component } from 'react'
import './Footer.css';
import { connect } from 'react-redux'
import { changeModo } from '../../redux/actions';



function mapDispatchToProps(dispatch) {
  return {
    changeModo: modo => dispatch(changeModo())
  }
}


class ConnectedFooter extends Component  {
  constructor(){
    super()
    this.changingModo = this.changingModo.bind(this)
  }


  changingModo(){
    this.props.changeModo()
  }
  render() {
    return(
      <footer>
        <button onClick={this.changingModo} >Change modo</button>
      </footer>
    )
  }
}

const Footer = connect(null,mapDispatchToProps)(ConnectedFooter)

export default Footer