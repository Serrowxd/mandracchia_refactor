import styled from 'styled-components';

export const FootContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${props => props.background};

  padding-right: 3%;
  padding-left: 3%;
`;
