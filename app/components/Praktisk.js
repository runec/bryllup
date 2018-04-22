import React from 'react';

import ContentBox from './general/ContentBox';

import { FullPageInfoBox, InfoBox } from '../styles/app.scss';

const Praktisk = () => {
  return (
    <div className={`${FullPageInfoBox} ${InfoBox}`}>
      <ContentBox>
        <h2>Praktisk</h2>
        <p>ff</p>
        <h3>Dresscode</h3>
        <p>
        Flere gæster har spurgt til dresscode. I er smukke som I er, men bliver vi tvunget til at sætte ord på tænker vi business/informal – eller på godt dansk, festtøj, således at der er ”frit valg i den pæne afdeling”
        rimelig fint tøj, pas på de høje hæle dog! Udendørs, så der er jord og græs og evt regn.
        </p>
        <h3>Bryllups-brunch</h3>
        <p>Vi håber at alle bliver til langt ude på natten, derfor vil vi også gerne invitere til en uformel bryllups-brunch søndag morgen kl. XX, på samme adresse som brylluppet.</p>
        <h3>Sociale medier</h3>
        <p>Meget velkomne til at tage billeder, men helst ikke alt muligt på Facebook, tak!</p>
      </ContentBox>
    </div>
  );
};

export default Praktisk;
