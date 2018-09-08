import React, { Component } from 'react';
import { MainContainer, Row, Column } from '../styles/styles';

import charles from '../assets/headshots/charlesprofile.jpg';
import chris from '../assets/headshots/unnamednew.jpg';
import jeff from '../assets/headshots/jeffprofile.jpg';

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
            <img src={charles} alt="charles" class="img" />
            <img src={chris} alt="charles" class="img" />
            <img src={jeff} alt="charles" class="img" />
          </Row>
        </Column>
      </MainContainer>
    );
  }
}

export default Attprof;
