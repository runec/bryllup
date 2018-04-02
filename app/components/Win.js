import React from 'react';

import { questionDiv } from '../styles/app.scss';

const Win = () => {
  return (
    <div className={questionDiv}>
      <h1>Sejr!</h1>
      <div>Tillykke, du klarede opgaverne! Nu har vist også fortjent din julegave.</div>
      <div>Kan du finde den?</div>
      <div>Jeg har bedt ham fra Vendsyssel-værelset om at holde øje med den!</div>
    </div>
  );
};

export default Win;
