import React, { Component } from 'react'
import './Footer.css';
import { connect } from 'react-redux'
import { changeModo } from '../../redux/actions';



const mapStateToProps = state => {
  return {
    modoTitle: state.modoTitle
  }
}

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
        <button onClick={this.changingModo} >{this.props.modoTitle}</button>
      </footer>
    )
  }
}

const Footer = connect(mapStateToProps,mapDispatchToProps)(ConnectedFooter)

export default Footer