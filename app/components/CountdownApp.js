import React from 'react';

import img from '../images/testblomster.jpg';
import imgOther from '../images/savethedate-1.jpg';
import Countdown from '../containers/Countdown';

const bryllupsdag = moment({year: 2018, month: 8, day: 11, hour: 12, minute: 0, second: 0});

const CountdownApp = () =>
    <div>
        <img src={imgOther} />
        <Countdown
          targetMoment={bryllupsdag}
        />
    </div>;

export default CountdownApp;
