import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';

// import DevTools from './DevTools';
import BryllupsApp from './BryllupsApp';

export default function Root({store, history}) {
  return (
        <Provider store={store}>
          <div>
            <BryllupsApp history={history} />
            {// }<DevTools />
          }
          </div>
        </Provider>
    );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
