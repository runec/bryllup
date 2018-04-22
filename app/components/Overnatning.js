import React from 'react';

import ContentBox from './general/ContentBox';

import { FullPageInfoBox, InfoBox } from '../styles/app.scss';

const Overnatning = () => {
  return (
    <div className={`${FullPageInfoBox} ${InfoBox}`}>
      <ContentBox>
        <h2>Overnatning</h2>
        <p>Telt i haven eller luftmadras i huset. Enkelte får værelser, men skal det nævnes her? Evt. flyt til 'Praktisk'</p>
      </ContentBox>
    </div>
  );
};

export default Overnatning;
