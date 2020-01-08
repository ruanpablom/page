import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin: 0 30px;

  @keyframes bounceInBottom {
    0% {
      opacity: 0;
      transform: translateY(2000px);
    }
    60% {
      opacity: 1;
      transform: translateY(-30px);
    }
    80% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  -webkit-animation-name: bounceInBottom;
  animation-name: bounceInBottom;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  strong {
    font-size: 2rem;
    color: #d1ff83;
  }

  small {
    font-size: 1.5rem;
    color: #7fd1f5;
    font-weight: bold;
  }
`;
