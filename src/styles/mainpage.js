import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* Global Padding */
  padding-right: 3%;
  padding-left: 3%;
`;

export const SectionContainerB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* Global Padding */
  padding-right: 3%;
  padding-left: 3%;

  /* Background */
  background-color: #212121 !important;

  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const SectionContainerG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* Global Padding */
  padding-right: 3%;
  padding-left: 3%;

  /* Background */
  background-color: #daa520;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* Temp Margin? */
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const ContainerColumnB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  /* Temp Margin? */
  margin-top: 3rem;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: auto;
    padding-left: 5%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  align-self: center;

  h1 {
    /* color: gold; */
  }

  p {
    font-size: 1.5rem;
  }
`;

export const HeaderContainerB = styled.div`
  text-align: center;
  align-self: center;

  h1 {
    color: #daa520;
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
    /* color: gold; */
  }
`;

export const IndivSkillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export const IndivHeadshot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 35rem;

  margin-right: 2rem;
  margin-left: 2rem;

  img {
    border-radius: 60%;
    margin-bottom: 2rem;
  }
`;

export const IndivHeadshotRow = styled.div`
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
