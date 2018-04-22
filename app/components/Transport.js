import React from 'react';

import ContentBox from './general/ContentBox';
import Sejlplan from './Sejlplan';

import { SejlPlanWrapper, TransportInfoBox, InfoBox } from '../styles/app.scss';

const Transport = () => {
  return (
    <div>
      <div id={TransportInfoBox} className={InfoBox}>
        <ContentBox>
          <h2>
            Transport
          </h2>
          <p>
            Brylluppet finder sted på <b>Skaløvej 25, 4944 Fejø</b>.
          </p>
          <p>
            For at komme til Fejø skal man sejle med færge fra Kragenæs Havn på Lolland. Det er en køretur fra København på ca. 2 timer, eller 3½ timer hvis man tager offentligt transport.
            Man skal gerne være ved færgen 10 minutter før afgang, og selve sejlturen tager ca. 15 min. Derefter er der kun 1,5 km fra havnen til gården hvor vi holder bryllup.
          </p>
          <p>
            Færgen har plads til ca. 30 biler, og er normalt ikke proppet. Man kan også lade bilen stå i Kragenæs Havn og tage over til fods.
          </p>
          <p>
            Billet til færgen koster normalt 55kr. pr. voksen, 20 kr. pr. barn og derudover 210 kr. for at få bilen med, men vi er i gang med få lavet en rabatordning. Man betaler ikke for returrejsen fra Fejø til Lolland. Man kan se flere detaljer om priser og afgangstider hos <a href="http://www.lollandfaergefart.dk">Lolland Færgefart</a>
          </p>
        </ContentBox>
      </div>
      <div id={SejlPlanWrapper}>
        <Sejlplan />
      </div>
    </div>
  );
};

export default Transport;
