import React from 'react';
import PropTypes from 'prop-types';

import TanjaRouter from './TanjaRouter';
import MenuBarContainer from './MenuBarContainer';

import BackgroundImage from '../images/baggrund.jpg';
import { MainContainer, MainContent, background } from '../styles/app.scss';

const BryllupsApp = ({history}) => {
  return (
      <div id={MainContainer}>
        <MenuBarContainer />
        <div id={MainContent}>
          <TanjaRouter history={history} />
          <div id={background}>
            <img src={BackgroundImage}/>
          </div>
        </div>
      </div>
  );
};

BryllupsApp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default BryllupsApp;