import styled from 'styled-components';

export const GlobalContainer = styled.div`
  font-family: Segoe UI Light !important;
`;

export const GlobalGutter = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Button = styled.button`
  width: 30rem;
  height: 4rem;
  font-size: 2rem;
  background-color: rgb(241, 179, 9);
  color: white;
  border: none;

  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: rgb(241, 198, 9)
      radial-gradient(circle, transparent 1%, rgb(241, 179, 9) 1%) center/15000%;
  }

  &:active {
    background-color: rgba(255, 230, 0, 0.945) !important;
    background-size: 100%;
    transition: background 0s;
  }
`;
