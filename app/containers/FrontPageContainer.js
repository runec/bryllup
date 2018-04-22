import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import Countdown from './Countdown';
import BackgroundImage from '../images/baggrund.jpg';
import Tilmelding from '../components/Tilmelding';

import { tilmeldSucceeded, tilmeldFailed, tilmeldSent } from '../actions';

import { background, TilmeldingWrapper } from '../styles/app.scss';

const bryllupsMoment = moment('2018-08-11 13:00:00+02');

class FrontPageContainer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div id={background}>
            <img src={BackgroundImage}/>
          </div>
      <div style={{height: '100%'}}>
        <div id={TilmeldingWrapper}>
          <Tilmelding onTilmeld={this.props.tilmeld} tilmeldStatus={this.props.tilmeldStatus}/>
        </div>
        <div style={{position: 'absolute', left: 0, right: 0, bottom: '5%'}}>
          <Countdown targetMoment={bryllupsMoment}/>
        </div>
      </div>
    </div>
  </div>

    );
  }
}

FrontPageContainer.propTypes = {
  tilmeld: PropTypes.func.isRequired,
  tilmeldStatus: PropTypes.oneOf(['NOT_SENT', 'PENDING', 'SUCCESS', 'FAILURE']).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    tilmeld: (names, allergies, musicChoices, attendingBrunch) => {
      dispatch(tilmeldSent());
      axios.post('http://www.tanja-rune-2018.dk:3030/tilmeld', {
        names: names,
        allergies: allergies,
        musicChoices: musicChoices,
        attendingBrunch: attendingBrunch,
      }).then((res) => {
        console.log('sent request hooray', res);
        dispatch(tilmeldSucceeded());
      }).catch((err) => {
        console.error('some error :(', err);
        dispatch(tilmeldFailed());
      });
    }
  };
};

const mapStateToProps = (state) => {
  const {
    tilmeld: { tilmeldStatus }
  } = state;
  return { tilmeldStatus };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPageContainer);
