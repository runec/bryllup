import React from 'react';
// import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import { durationDisplay } from '../styles/app.scss';
const DurationDisplay = ({duration}) => {
  const getZeroPaddedUnit = (unit) => unit < 10 ? '0' + unit : unit;
  const months = Math.floor(duration.asMonths());
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  return (
    <div className={durationDisplay}>
      {months} måneder {days} dage {getZeroPaddedUnit(hours)}:{getZeroPaddedUnit(minutes)}:{getZeroPaddedUnit(seconds)}
    </div>
  );
};

DurationDisplay.propTypes = {
  duration: MomentPropTypes.momentDurationObj.isRequired,
};

export default DurationDisplay;
