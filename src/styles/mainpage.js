import styled from 'styled-components';

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

  color: white;

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
