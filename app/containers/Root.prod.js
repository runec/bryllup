import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import TanjaRouter from './TanjaRouter';

export default function Root({store, history}) {
  return (
        <Provider store={store}>
          <div>
            <TanjaRouter
              history={history}
            />
          </div>
        </Provider>
    );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
