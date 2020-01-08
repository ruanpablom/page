import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  img {
    @media only screen and (min-width: 320px) and (max-width: 1024px) {
      height: 100px;
    }

    @media only screen and (min-width: 1024px) {
      height: 250px;
    }
  }
`;
