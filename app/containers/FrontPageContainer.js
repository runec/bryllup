import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Countdown from './Countdown';
import ContentBox from '../components/general/ContentBox';


const bryllupsMoment = moment('2018-08-11 13:00:00+02');

class FrontPageContainer extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <div style={{position: 'relative', left: '50%', width: '50%', top: '20%'}}>
          <ContentBox>
            <div>
              <p>
                TILMELDING
              </p>
              <p>
                Hej her er en lang historie.
              </p>
              <p>
                Jeg har selv fundet på det hele.
              </p>
            </div>
          </ContentBox>
        </div>

        <div style={{position: 'absolute', left: 0, right: 0, bottom: '5%'}}>
          <Countdown targetMoment={bryllupsMoment}/>
        </div>
      </div>
    );
  }
}

FrontPageContainer.propTypes = {
};


export default connect(null, null)(FrontPageContainer);
