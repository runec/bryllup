import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Praktisk from '../components/Praktisk';
import Dagen from '../components/Dagen';
import BackgroundImage from '../images/baggrund.jpg';
import { background } from '../styles/app.scss';

class DagenContainer extends React.Component {
  render() {
    return (
      <div>
        <div id={background}>
          <img src={BackgroundImage}/>
        </div>
        <Dagen />
      </div>
    );
  }
}

DagenContainer.propTypes = {
};


export default connect(null, null)(DagenContainer);
