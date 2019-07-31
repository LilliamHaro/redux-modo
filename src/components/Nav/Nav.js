import React from "react";
import { connect } from "react-redux";
import "./Nav.css";

const mapStateToProps = state => {
  return { buyCar: state.buyCar };
};

const NavConnected = ({ buyCar }) => (
  <nav>
    Productos en el carrito: <span>{buyCar.length}</span>
    {console.log('ff',buyCar)}
  </nav>
);

const Nav = connect(mapStateToProps)(NavConnected);

export default Nav;
