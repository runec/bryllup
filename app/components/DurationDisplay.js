import React from 'react';
// import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';

const DurationDisplay = ({duration}) => {
  const months = Math.floor(duration.asMonths());
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  return (
    <div>
      {months} måneder, {days} dage, {hours} timer, {minutes} minutter, {seconds} sekunder
    </div>
  );
};

DurationDisplay.propTypes = {
  duration: MomentPropTypes.momentDurationObj.isRequired,
};

export default DurationDisplay;
