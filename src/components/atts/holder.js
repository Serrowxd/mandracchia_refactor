import React, { Fragment } from 'react';
import { Row, Column, AttContainer } from '../../styles/styles';

import charles from '../../assets/lawyerimgs/Mandracchia_0091.jpg';
import chris from '../../assets/headshots/unnamednew.jpg';
import jeff from '../../assets/lawyerimgs/Soderberg_0107.jpg';

const Holder = props => {
  return (
    <Fragment>
      <Column attprofmain>
        <h1>We fight for you!</h1>
        <Row attprofmain>
          <AttContainer>
            <img
              src={charles}
              alt="charles"
              class="img"
              onClick={props.handler1}
            />
            <h1>Charles</h1>
          </AttContainer>
          <AttContainer>
            <img
              src={chris}
              alt="charles"
              class="img"
              onClick={props.handler2}
            />
            <h1>Chris</h1>
          </AttContainer>
          <AttContainer>
            <img
              src={jeff}
              alt="charles"
              class="img"
              onClick={props.handler3}
            />
            <h1>Jeff</h1>
          </AttContainer>
        </Row>
      </Column>
    </Fragment>
  );
};

export default Holder;
