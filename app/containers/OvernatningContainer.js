import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Praktisk from '../components/Praktisk';
import Overnatning from '../components/Overnatning';
import BackgroundImage from '../images/baggrund.jpg';
import { background } from '../styles/app.scss';

class OvernatningContainer extends React.Component {
  render() {
    return (
      <div>
        <div id={background}>
          <img src={BackgroundImage}/>
        </div>
        <Overnatning />
      </div>
    );
  }
}

OvernatningContainer.propTypes = {
};


export default connect(null, null)(OvernatningContainer);
