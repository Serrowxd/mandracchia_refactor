import React from 'react';

import { Headshot } from '../../reducer';

const Head = props => (
  <Headshot>
    <img src={props.imgSrc} alt={props.alt} />
    <h2> {props.title} </h2>
    <h3> {props.children} </h3>
  </Headshot>
);

export default Head;
