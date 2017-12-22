import React from 'react';
import { Grid } from 'react-bootstrap';

import Countdown from '../containers/Countdown';
import img from '../images/savethedate-final.png';
import imgMobile from '../images/savethedate-final-mobile.png';
const bryllupsdag = moment({year: 2018, month: 7, day: 11, hour: 12, minute: 0, second: 0});
import { saveTheDateDiv, saveTheDateImg, saveTheDateMobileImg } from '../styles/app.scss';

const BryllupsApp = () =>
    <Grid fluid style={{backgroundColor: '#f7f1e7', minHeight: '100vh'}}>
      <div className={saveTheDateDiv}>
        <div style={{textAlign: 'center'}}>
          <img src={img} style={{width: '100%'}} id={saveTheDateImg}/>
          <img src={imgMobile} style={{width: '100%'}} id={saveTheDateMobileImg} />
        </div>
        <Countdown targetMoment={bryllupsdag} />
      </div>
    </Grid>;

export default BryllupsApp;
