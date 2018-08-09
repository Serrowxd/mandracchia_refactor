import styled from 'styled-components';

const color = '#F8F9FA';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* Global Padding */
  padding-right: 3%;
  padding-left: 3%;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// Black

export const SectionContainerB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

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
  margin-top: 3rem;
  margin-bottom: 3rem;
  align-self: center;

  h1 {
    /* color: gold; */
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
    /* color: gold; */
  }
`;

export const IndivSkillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;
