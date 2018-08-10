import React from 'react';

import { IndivSkill } from '../../reducer';

const Skill = props => (
  <IndivSkill>
    <h1>{props.title}</h1>
    <p>{props.children}</p>
  </IndivSkill>
);

export default Skill;
