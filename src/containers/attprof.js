import React, { Component } from 'react';
import { MainContainer, Row, Column, AttContainer } from '../styles/styles';

import charles from '../assets/lawyerimgs/Mandracchia_0091.jpg';
import chris from '../assets/headshots/unnamednew.jpg';
import jeff from '../assets/lawyerimgs/Soderberg_0107.jpg';

class Attprof extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: null,
    };
  }

  handleClick(compName, e) {
    this.setState({ comp: compName });
  }

  render() {
    return (
      <MainContainer>
        <Column attprofmain>
          <h1>Pennsylvania Legal Representation</h1>
          <h2>We fight for you!</h2>
          <Row attprofmain>
            <AttContainer>
              <img src={charles} alt="charles" class="img" />
            </AttContainer>
            <AttContainer>
              <img src={chris} alt="charles" class="img" />
            </AttContainer>
            <AttContainer>
              <img src={jeff} alt="charles" class="img" />
            </AttContainer>
          </Row>
        </Column>
      </MainContainer>
    );
  }
}

export default Attprof;
