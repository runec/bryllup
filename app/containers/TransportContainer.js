import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Praktisk from '../components/Praktisk';
import Transport from '../components/Transport';
import BackgroundImage from '../images/fejokort.png';
import { background } from '../styles/app.scss';

class TransportContainer extends React.Component {
  render() {
    return (
      <div>
        <div id={background}>
          <img src={BackgroundImage}/>
        </div>
        <Transport />
      </div>
    );
  }
}

TransportContainer.propTypes = {
};


export default connect(null, null)(TransportContainer);
