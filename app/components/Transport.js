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
            For at komme til Fejø, skal der sejles med færge fra Kragenæs, Lolland. Man skal møde 10 min før afgangstidspunktet. Der kan betales med dankort ved færgelejet. Overfarten tager ca. 15 min. Der er plads til 30 biler ad gangen på færgen.
          </p>
          <p>
            Kragenæs ligger 170 km fra København. Det tager ca. 2 timer i bil eller 3 ½ med offentlig transport
          </p>
          <p>
            Nævn også: pris + de nøglebrikker vi har. Mulighed for at stille bil i kragenæs og gå det sidste stykke (hvor langt?).
            Dem med campingvogn skal komme tidligere helst. Hvilken færdge bør man tage for at nå det?
            Link til officiel færgeplan.
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
