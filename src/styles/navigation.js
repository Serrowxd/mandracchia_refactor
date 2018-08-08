import styled from 'styled-components';

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
  color: rgb(241, 179, 9);

  img {
    height: 8rem;
    width: auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
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
