import styled from 'styled-components';

import imgbkg from '../assets/unnamed30opacnorm.png';

export const HeadContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 10rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  /* Background Image */
  background-color: rgb(24, 24, 24) !important;
  background-image: url(${imgbkg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 130rem;
  background-attachment: fixed;
`;

export const HeadText = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  /* GLobal Padding */
  padding-left: 3%;

  h2,
  h3,
  h4,
  p {
    color: white;
    font-weight: bold;
  }

  h3 {
    font-size: 5rem;
  }

  h2 {
    font-size: 6rem;
  }

  h4 {
    font-size: 4rem;
  }

  p {
    padding-top: 10%;
    font-size: 1.25rem;
    margin-bottom: 10%;
  }
`;

export const HeadImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Global Padding */
  padding-right: 3%;

  img {
    width: auto;
    height: 49rem;
  }
`;
