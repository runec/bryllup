import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import MenuBar from '../components/MenuBar';

class MenuBarContainer extends React.Component {
  render() {
    return (
      <MenuBar goToLocation={this.props.goToLocation}/>
    );
  }
}

MenuBarContainer.propTypes = {
  goToLocation: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToLocation: (location) => dispatch(push(location)),
  };
};

export default connect(null, mapDispatchToProps)(MenuBarContainer);
