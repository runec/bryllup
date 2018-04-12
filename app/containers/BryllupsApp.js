import React from 'react';
import PropTypes from 'prop-types';

import TanjaRouter from './TanjaRouter';
import MenuBarContainer from './MenuBarContainer';

import BackgroundImage from '../images/baggrund.jpg';
import { mainContainer, content, background } from '../styles/app.scss';

const BryllupsApp = ({history}) => {
  return (
    <div className={mainContainer}>
      <MenuBarContainer />
      <div className={content}>
        <TanjaRouter history={history} />
      </div>
      <div id={background}>
        <img src={BackgroundImage}/>
      </div>
    </div>
  );
};

BryllupsApp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default BryllupsApp;
