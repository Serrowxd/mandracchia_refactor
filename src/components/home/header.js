import React from 'react';

import {
  HeadContainer,
  HeadText,
  HeadImage,
  Button,
} from '../../reducer/styles';

import img from '../../assets/lawyerimgs/MainPageChrisCharles.png';

const Header = () => {
  return (
    <HeadContainer>
      <HeadText>
        <h3> Looking For </h3>
        <h2> LEGAL </h2>
        <h2> REPRESENTATION </h2>
        <h4> IN PENNSYLVANIA </h4>
        <p>
          {' '}
          Mandracchia Law is a team of experienced trial attorneys and
          litigators. We handle Criminal Defense, Civil Litigation, Personal
          Injury, Real Estate, Family Law, Wills & Estates, Domestic Disputes,
          etc.
        </p>
        <Button> Let us Fight for You! </Button>
      </HeadText>
      <HeadImage>
        <img src={img} alt="mandracchia" />
      </HeadImage>
    </HeadContainer>
  );
};

export default Header;
