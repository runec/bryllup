import React from 'react';
// import PropTypes from 'prop-types';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
// import { durationDisplay } from '../styles/app.scss';

const getZeroPaddedUnit = (unit) => unit < 10 ? `0${unit}` : `${unit}`;

const UnitDisplay = ({unitText, valueText, width}) => {
  return (
    <div style={{width: width, display: 'inline-block'}}>
      <div style={{fontSize: '36pt', color: 'white', textAlign: 'right'}}>
        {valueText}
      </div>
      <div style={{textAlign: 'right', color: 'rgba(200,200,200,1)'}}>
        {unitText}
      </div>
    </div>
  );
};

UnitDisplay.propTypes = {
  unitText: PropTypes.string.isRequired,
  valueText: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

const DurationDisplay = ({duration}) => {
  // const months = Math.floor(duration.asMonths());
  const weeks = Math.floor(duration.asWeeks());
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  /*
    <div className={durationDisplay}>
      {months} måneder {days} dage {getZeroPaddedUnit(hours)}:{getZeroPaddedUnit(minutes)}:{getZeroPaddedUnit(seconds)}
    </div>
  */
  return (
    <div style={{width: '450px', margin: '0 auto'}}>
      <UnitDisplay width={'18%'} unitText={'UGER'} valueText={weeks} />
      <UnitDisplay width={'18%'} unitText={'DAGE'} valueText={days} />
      <UnitDisplay width={'18%'} unitText={'TIMER'} valueText={getZeroPaddedUnit(hours)} />
      <UnitDisplay width={'20%'} unitText={'MINUTTER'} valueText={`: ${getZeroPaddedUnit(minutes)}`} />
      <UnitDisplay width={'20%'} unitText={'SEKUNDER'} valueText={`: ${getZeroPaddedUnit(seconds)}`} />
    </div>
  );
};

DurationDisplay.propTypes = {
  duration: MomentPropTypes.momentDurationObj.isRequired,
};

export default DurationDisplay;
