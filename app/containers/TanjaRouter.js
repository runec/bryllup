import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import PraktiskContainer from './PraktiskContainer';
import FrontPageContainer from './FrontPageContainer';
import TransportContainer from './TransportContainer';
import OvernatningContainer from './OvernatningContainer';
import WishListContainer from './WishListContainer';

const TanjaRouter = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={FrontPageContainer}/>
        <Route path="/praktisk" component={PraktiskContainer}  />
        <Route path="/transport" component={TransportContainer} />
        <Route path="/overnatning" component={OvernatningContainer} />
        <Route path="/wishlist" component={WishListContainer} />
      </Switch>
    </ConnectedRouter>
  );
};

TanjaRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default TanjaRouter;
