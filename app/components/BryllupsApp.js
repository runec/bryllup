import React from 'react';

import Countdown from '../containers/Countdown';

const bryllupsdag = moment({year: 2018, month: 8, day: 11, hour: 12, minute: 0, second: 0});

const BryllupsApp = () =>
    <div>
        <Countdown
          targetMoment={bryllupsdag}
        />
    </div>;

export default BryllupsApp;
