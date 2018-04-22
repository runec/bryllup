import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Praktisk from '../components/Praktisk';
import WishList from '../components/WishList';
import BackgroundImage from '../images/baggrund.jpg';
import { background } from '../styles/app.scss';

class WishListContainer extends React.Component {
  render() {
    return (
      <div>
        <div id={background}>
          <img src={BackgroundImage}/>
        </div>
        <WishList />
      </div>
    );
  }
}

WishListContainer.propTypes = {
};


export default connect(null, null)(WishListContainer);
