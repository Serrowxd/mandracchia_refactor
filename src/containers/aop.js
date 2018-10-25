import React, { Component } from 'react';
import { MainContainer, Column, Row } from '../styles/styles';

class AoP extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Henlo (OvO")',
      comp: null,
    };
  }

  handleClick = (compName, compTitle) => {
    this.setState({ title: compTitle });
    this.setState({ comp: compName });
  };

  render() {
    return (
      <MainContainer color="white">
        <h1> {this.state.title} </h1>
        <Row>
          <Column aopnav>
            <h1> Henlo (OvO") </h1>
          </Column>
          <Column>
            <h1> Henlo (OvO")</h1>
          </Column>
        </Row>
      </MainContainer>
    );
  }
}

export default AoP;
