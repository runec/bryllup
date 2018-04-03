import React from 'react';
import PropTypes from 'prop-types';

import TanjaRouter from './TanjaRouter';
import MenuBar from '../components/MenuBar';

const BryllupsApp = ({history}) => {
  return (
    <div>
      <MenuBar />
      <TanjaRouter history={history} />

    </div>
  );
};

BryllupsApp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default BryllupsApp;
