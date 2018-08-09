import React, { Component } from 'react';

import { Navigation, Footer } from '../reducer/container';
import { Header, MainPage } from '../reducer/index.js';

// Styles
import { GlobalContainer } from '../reducer/styles';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  a;
  render() {
    return (
      <GlobalContainer>
        <Navigation />

        <Header />
        <MainPage />

        <Footer />
      </GlobalContainer>
    );
  }
}

export default Layout;
