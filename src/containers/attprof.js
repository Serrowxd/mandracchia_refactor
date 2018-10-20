import React, { Component } from 'react';
import { MainContainer } from '../styles/styles';
import { Holder, Charles, Chris, Jeff } from '../reducer';

class Attprof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: (
        <Holder
          handler1={this.handleClick1}
          handler2={this.handleClick2}
          handler3={this.handleClick3}
        />
      ),
    };
  }

  handleClick1 = e => {
    this.setState({ comp: <Charles /> });
  };

  handleClick2 = e => {
    this.setState({ comp: <Chris /> });
  };

  handleClick3 = e => {
    this.setState({ comp: <Jeff /> });
  };

  // Children are rendered on Click

  render() {
    return <MainContainer>{this.state.comp}</MainContainer>;
  }
}

// OnClick should set the component rendered by state to the clicked image of the Attorney

export default Attprof;
