import React from 'react';

import { Container } from './styles';

import cvIcon from '../../assets/imgs/cvicon.png';
import githubIcon from '../../assets/imgs/githubicon.png';
import linkedinIcon from '../../assets/imgs/linkedinicon.png';

export default function Contact() {
  return (
    <Container>
      <a
        href="../../assets/others/Ruan-Medeiros_CV.pdf"
        download="Ruan-Medeiros_CV.pdf"
      >
        <img style={{ marginRight: '10px' }} src={cvIcon} alt="" />
      </a>
      <a href="https://github.com/ruanpablom">
        <img style={{ marginRight: '10px' }} src={githubIcon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/ruan-medeiros-365b9b125/">
        <img src={linkedinIcon} alt="" />
      </a>
    </Container>
  );
}
