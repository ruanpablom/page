import React from 'react';

import Coodeblock from './components/Coodeblock';
import Img from './components/Img';
import Content from './components/Content';
import Contact from './components/Contact';

import './globalStyles.css';

export default function App() {
  return (
    <>
      <Img />
      <Coodeblock>
        <Content />
      </Coodeblock>
      <Contact />
    </>
  );
}
