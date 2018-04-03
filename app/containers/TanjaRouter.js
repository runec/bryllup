import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import Countdown from './Countdown';

const TanjaRouter = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Countdown}/>
        <Route path="/praktisk" render={()=><Countdown />}  />
      </Switch>
    </ConnectedRouter>
  );
};

TanjaRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default TanjaRouter;
