import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import React from 'react';
import { connect } from 'react-redux';

import { refreshCurrentMoment } from '../actions';
import DurationDisplay from '../components/DurationDisplay';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {timer: null};
  }

  componentDidMount() {
    this.timer = setInterval(this.props.refresh, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if(!this.props.currentMoment) {
      return null;
    }
    const duration = moment.duration(this.props.targetMoment.diff(moment()));
    return (
      <DurationDisplay
        duration={duration}
      />
    );
  }
}

Countdown.propTypes = {
  targetMoment: MomentPropTypes.momentObj.isRequired,
  currentMoment: MomentPropTypes.momentObj,
  refresh: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => {
      dispatch(refreshCurrentMoment());
    }
  };
};

const mapStateToProps = (state) => {
  const {
    countdown: { currentMoment }
  } = state;
  return { currentMoment };
};

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
