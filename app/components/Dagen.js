import React from 'react';

import ContentBox from './general/ContentBox';

import { FullPageInfoBox, InfoBox } from '../styles/app.scss';

const Dagen = () => {
  return (
    <div className={`${FullPageInfoBox} ${InfoBox}`}>
      <ContentBox>
        <h2>Dagens forløb</h2>

      </ContentBox>
    </div>
  );
};

export default Dagen;
