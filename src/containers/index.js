import React, { Component } from 'react';

import img from '../assets/manlawhead.png';

import {
  NavContainer,
  NavImage,
  NavCall,
  Footer,
  GlobalContainer,
  MainPage,
  About,
} from '../reducer';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: <MainPage />,
    };
  }

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }

  render() {
    return (
      <GlobalContainer>
        <NavContainer>
          <NavImage>
            <img src={img} alt="manlaw" />
          </NavImage>
          <h1 onClick={this.handleClick.bind(this, <MainPage />)} tag="a">
            Home
          </h1>
          <h1 onClick={this.handleClick.bind(this, <About />)} tag="a">
            About Us
          </h1>
          <h1 onClick={this.handleClick.bind(this, <MainPage />)} tag="a">
            Attorney Profiles
          </h1>
          <h1 onClick={this.handleClick.bind(this, <MainPage />)} tag="a">
            Areas of Practice
          </h1>
          <h1 onClick={this.handleClick.bind(this, <MainPage />)} tag="a">
            Contact
          </h1>
          <NavCall>
            <h2>
              Call for Consultation <br /> 610-584-0700
            </h2>
          </NavCall>
        </NavContainer>

        {this.state.render}

        <Footer />
      </GlobalContainer>
    );
  }
}

export default Index;
