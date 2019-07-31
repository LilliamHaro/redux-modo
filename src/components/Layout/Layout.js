import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { connect } from 'react-redux'
import './Layout.css';

const Layout = (props) => (
  <main>
    <Nav />
    {props.children}
    <Footer />
  </main>
);


export default Layout
