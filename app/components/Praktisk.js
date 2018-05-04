import React from 'react';

import ContentBox from './general/ContentBox';

import { FullPageInfoBox, InfoBox, PraktiskInfoWrapper, DagenImageWrapper } from '../styles/app.scss';
import DagenImage from '../images/tidsplan1.png';

const Praktisk = () => {
  return (
    <div className={`${FullPageInfoBox} ${InfoBox}`}>
      <ContentBox>
        <div id={PraktiskInfoWrapper} style={{width: '70%', display: 'inline-block'}}>
        <h3>Dresscode</h3>
        <p>
        Flere gæster har spurgt til dresscode. I er smukke som I er, men bliver vi tvunget til at sætte ord på tænker vi business/informal – eller på godt dansk, festtøj, således at der er ”frit valg i den pæne afdeling”.
        Det er dog nok en god idé at undgå sko med høje, spidse hæle og kjoler med slæb, da planen er at holde festen i et telt i haven.
        <p>
          Det er også en god idé at tage en varm trøje med, hvis det skulle blive køligt i løbet af aftenen eller natten.
        </p>
        </p>
        <h3>Overnatning og bryllups-brunch</h3>
        <p>
          Det er ikke nemt at komme væk fra Fejø efter kl. 23, så vi håber på, at de fleste af jer gerne vil blive og overnatte.
          Der er desværre slet ikke nok sengepladser til alle på gården, men der er en stor have hvor der er plads til at slå telte op.
        </p>
        <p>Dagen derpå vil vi gerne byde på en uformel bryllups-brunch søndag morgen kl. 11, på samme adresse som brylluppet.</p>
        <h3>Sociale medier</h3>
        <p>I er selvfølgelig meget velkomne til at tage billeder i løbet af dagen! Men vi vil være glade for, at man ikke lægger noget offentligt ud på Facebook, Instagram e.l. uden at spørge os først. Snapchat er ok!</p>
        <h3>Taler og indslag</h3>
        <p>Pønser man på at sige et par ord eller lave et andet sjovt indslag, skal man være meget velkommen! Bare henvend jer til toastmaster Jonas Bøndergaard.</p>
      </div>
      <div id={DagenImageWrapper}>
        <img src={DagenImage}/>
      </div>

      </ContentBox>
    </div>
  );
};

export default Praktisk;
