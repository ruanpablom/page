import React from 'react';

import { Container } from './styles';
import notebook from '../../assets/imgs/notebook.svg';

export default function Img() {
  return (
    <Container>
      <img src={notebook} alt="Notebook" />
    </Container>
  );
}
