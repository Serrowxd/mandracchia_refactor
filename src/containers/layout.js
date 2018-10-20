import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import { MainPage, About, Footer, Attprof, Charles } from '../reducer';

import {
  GlobalContainer,
  NavContainer,
  NavImage,
  NavCall,
} from '../styles/styles';

import img from '../assets/manlawhead.png';

class Layout extends Component {
  render() {
    return (
      <GlobalContainer>
        <NavContainer>
          <NavImage>
            <img src={img} alt="manlaw" />
          </NavImage>
          <a href="/">
            <h1>Home</h1>
          </a>
          <a href="/aboutus">
            <h1>About Us</h1>
          </a>
          <a href="/attprof">
            <h1>Attorney Profiles</h1>
          </a>
          <h1>Areas of Practice</h1>
          <h1>Contact</h1>
          <NavCall>
            <h2>
              Call for Consultation <br /> 610-584-0700
            </h2>
          </NavCall>
        </NavContainer>

        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/aboutus" exact component={About} />
          <Route path="/attprof" exact component={Attprof} />
          <Route path="/charles" component={Charles} />
        </Switch>

        <Footer />
      </GlobalContainer>
    );
  }
}

export default Layout;
