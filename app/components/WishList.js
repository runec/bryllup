import React from 'react';

import ContentBox from './general/ContentBox';

import { FullPageInfoBox, InfoBox } from '../styles/app.scss';

const WishList = () => {
  return (
    <div className={`${FullPageInfoBox} ${InfoBox}`}>
      <ContentBox>
        <h2>
          Ønskeliste
        </h2>
        <p>
          Coming soon!
        </p>
      </ContentBox>
    </div>
  );
};

export default WishList;
