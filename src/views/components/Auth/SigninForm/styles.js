import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARKER};
  width: 33.125em;
  height: 21.625em;
  margin: auto;
  border-radius: 0.35em;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
