import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import "./Layout.css";



const mapStateToProps = state =>{
  return {
    modo: state.modo
  }
}
class ConnectedLayout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className={this.props.modo}>
        <Nav />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

const Layout = connect(mapStateToProps)(ConnectedLayout)

export default Layout;
