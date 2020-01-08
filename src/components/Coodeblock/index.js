import React from 'react';

import { Container } from './styles';

import leftBracket from '../../assets/imgs/left-bracket.png';
import rightBracket from '../../assets/imgs/right-bracket.png';

export default function Coodeblock({ children }) {
  return (
    <Container>
      <img id="left-bracket" src={leftBracket} alt="left-bracket" />
      {children}
      <img id="right-bracket" src={rightBracket} alt="right-bracket" />
    </Container>
  );
}
