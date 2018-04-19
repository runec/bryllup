import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import PraktiskContainer from './PraktiskContainer';
import FrontPageContainer from './FrontPageContainer';

const TanjaRouter = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={FrontPageContainer}/>
        <Route path="/praktisk" component={PraktiskContainer}  />
      </Switch>
    </ConnectedRouter>
  );
};

TanjaRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default TanjaRouter;
