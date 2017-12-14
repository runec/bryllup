import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import CountdownApp from '../components/CountdownApp';
import BryllupsApp from '../components/BryllupsApp';
import PropTypes from 'prop-types';

const TanjaRouter = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={CountdownApp}/>
        <Route path="/hemmelig" component={BryllupsApp} />
      </Switch>
    </ConnectedRouter>
  );
};

TanjaRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default TanjaRouter;
