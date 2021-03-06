import styled, { css } from 'styled-components';
import imgbkg from '../assets/unnamed30opacnorm.png';

// ****
// Global
// ****

const colors = {
  text: 'rgb(241, 179, 9)',
};

const { text } = colors;

export const GlobalContainer = styled.div`
  font-family: Segoe UI Light !important;
  background-color: #212121;
  min-height: 100vh;
`;

export const GlobalGutter = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
`;

export const MainContainer = styled.div`
  padding-top: 10rem;

  color: ${props => props.color};
`;

export const Button = styled.button`
  width: 30rem;
  height: 4rem;
  font-size: 2rem;
  background-color: ${text};
  color: white;
  border: none;
  outline: none;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: rgb(241, 198, 9)
      radial-gradient(circle, transparent 1%, ${text} 1%) center/15000%;
  }

  &:active {
    background-color: rgba(255, 230, 0, 0.945) !important;
    background-size: 100%;
    transition: background 0s;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: white;

  ${props =>
    props.attprofmain &&
    css`
      align-items: center;
      justify-content: space-evenly;
      margin-top: 3rem;
      margin-bottom: 10rem;

      img {
        height: auto;
        width: 400px;
      }
    `};

  ${props =>
    props.attpersonal &&
    css`
      justify-content: space-around;
      width: ${props => props.width};
      p {
        margin-top: 2rem;
        font-size: 1.2rem;
      }
      span {
        font-weight: bold;
      }
    `};

  ${props =>
    props.attbio &&
    css`
      margin-top: 3rem;
      width: 95%;
      p {
        font-size: 1.2rem;
        margin-left: 10rem;
      }
    `};

  ${props =>
    props.attbiobot &&
    css`
      margin-top: 3rem;
      justify-content: space-around;
      text-align: center;

      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: ${text};
      }

      p {
        font-size: 1.2rem;
      }
    `};

  ${props =>
    props.aboutus &&
    css`
      margin-top: 5rem;
      /* width: 95%; */
      img {
        margin-left: 10rem;
        height: 20rem;
        width: auto;
      }
      p {
        margin-left: 2rem !important;
        font-size: 1.2rem;
      }
    `};
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;

  ${props =>
    props.attprofmain &&
    css`
      align-items: center;
      height: 70vh;
      justify-content: space-evenly;
      margin-top: 7rem;
    `};

  ${props =>
    props.attpersonal &&
    css`
      width: ${props => props.width};
      justify-content: center;
      margin-top: 5rem;

      img {
        width: 25rem;
        height: auto;
        margin-left: 10rem;
      }

      h1 {
        font-size: 6rem;
      }
    `};

  ${props =>
    props.aboutus &&
    css`
      width: 95%;
      h1 {
        margin-left: 10rem;
        text-align: center;
      }
      p {
        font-size: 1.2rem;
        margin-left: 10rem;
      }
    `};

  ${props =>
    props.aopnav &&
    css`
      color: white;
    `};
`;

// ****
// Header
// ****

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

  button {
    font-size: 2rem;
    &:focus {
      outline: none;
    }
  }

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
  overflow: hidden;

  /* Global Padding */
  padding-right: 3%;

  img {
    width: auto;
    height: 52rem;
  }
`;

// ****
// Footer
// ****

export const FootContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${props => props.background};
  color: white;
  align-items: center;

  padding-right: 3%;
  padding-left: 3%;
`;

// ****
// Navigation
// ****

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent !important;
  position: absolute;
  padding-top: 1rem;

  /* Text */
  color: ${text};

  img {
    height: 8rem;
    width: auto;
  }

  a {
    text-decoration: none !important;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.3s ease;
    text-decoration: none;
    color: ${text};

    &:hover {
      cursor: pointer;
      color: white;
    }
  }
`;

export const NavImage = styled.div`
  align-self: center;
`;

export const NavCall = styled.div`
  text-align: center;
  color: white;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

// ****
// Main
// ****

// Refactor into classes to make simple modifications on Container(B) etc.

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  background-color: ${props => props.background};

  /* Global Padding */
  padding-right: 3%;
  padding-left: 3%;

  h1 {
    font-size: ${props => props.hFont};
  }

  p {
    font-size: ${props => props.pFont};
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  /* Temp Margin? */
  margin-top: 3rem;
  margin-bottom: 3rem;

  img {
    width: ${props => props.width}
    height: auto;
    padding-left: ${props => props.paddingLeft};
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  align-self: center;

  h1 {
    color: ${props => props.color};
  }

  p {
    font-size: 1.5rem;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-top: 3rem;
    font-size: 1.5rem;
    outline: none;

    &:focus {
      outline: none;
    }
  }
`;

export const IndivSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 35rem;

  margin-right: 2rem;
  margin-left: 2rem;

  h1 {
    color: ${props => props.color};
  }
`;

export const SkillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

// Just rename components to something simple.
export const Headshot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 35rem;

  margin-right: 2rem;
  margin-left: 2rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 60%;
    margin-bottom: 2rem;
  }
`;

export const HeadshotRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;

  width: 90rem;
  margin-top: 3rem;
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  /* width: 60rem; */

  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* color: white; */

  button {
    font-size: 1rem;
    background-color: white;
    &:focus {
      outline: none;
    }
  }

  h1,
  p {
    text-align: center;
    font-weight: bold;
  }

  img {
    width: 40rem;
    margin-right: 3rem;
  }

  input {
    width: 35rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  textarea {
    width: 35rem;
    height: 10rem;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

// ****
// AttProf
// ****

export const AttContainer = styled.div`
  height: 60vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;

    h1 {
      color: ${text};
    }
  }
  img {
    width: auto;
    height: 30rem;
  }
  h1 {
    transition: 0.5s;
    margin-top: 1rem;
  }
`;
