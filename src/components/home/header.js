import React from 'react';

import { HeadContainer, HeadText, HeadImage } from '../../styles/styles';

import Button from '@material-ui/core/Button';
import amber from '@material-ui/core/colors/amber';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import img from '../../assets/lawyerimgs/MainPageChrisCharles.png';

const Header = () => {
  const theme = createMuiTheme({
    palette: {
      primary: amber,
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
    },
  });
  return (
    <HeadContainer>
      <HeadText>
        <h3> Looking For </h3>
        <h2> LEGAL </h2>
        <h2> REPRESENTATION </h2>
        <h4> IN PHILLIDELPHIA? </h4>
        <p>
          {' '}
          Mandracchia Law is a team of experienced trial attorneys and
          litigators. We handle Criminal Defense, Civil Litigation, Personal
          Injury, Real Estate, Family Law, Wills & Estates, Domestic Disputes,
          and more.
        </p>
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color="primary">
            Let us fight for you!
          </Button>
        </MuiThemeProvider>
      </HeadText>
      <HeadImage>
        <img src={img} alt="mandracchia" />
      </HeadImage>
    </HeadContainer>
  );
};

export default Header;
