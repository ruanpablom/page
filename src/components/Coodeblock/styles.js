import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      transform: translateX(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(30px);
    }
    80% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes bounceInRight {
    0% {
      opacity: 0;
      transform: translateX(2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(-30px);
    }
    80% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  #left-bracket {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  #right-bracket {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  img {
    @media screen and (min-width: 320px) and (max-width: 1024px) {
      height: 50px;
    }

    @media screen and (min-width: 1024px) {
      height: 100px;
    }
  }
`;
