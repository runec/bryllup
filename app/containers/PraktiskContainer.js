import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Praktisk from '../components/Praktisk';
import BackgroundImage from '../images/baggrund.jpg';
import { background } from '../styles/app.scss';

class PraktiskContainer extends React.Component {
  render() {
    return (
      <div>
        <div id={background}>
          <img src={BackgroundImage}/>
        </div>
        <Praktisk />
      </div>
    );
  }
}

PraktiskContainer.propTypes = {
};


export default connect(null, null)(PraktiskContainer);
