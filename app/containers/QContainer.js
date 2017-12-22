import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { answerQ } from '../actions';
class QContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentQ === 1) {
      return (

      )
    } else if(this.props.currentQ === 2) {
      return (

      )
    } else if(this.props.currentQ === 3) {
      return (

      )
    } else {
      return (
        <div>
          done!
        </div>
      )
    }
    return (
      <div>
        <div>test</div>
        <Button onClick={()=>{console.log('lol');}}>Hej</Button>
      </div>
    );


    // hint
    // input
    // error message
    // button
  }
}

QContainer.propTypes = {

};

const mapDispatchToProps = (dispatch) => {
  return {
    answerQ1: (answer) => {
      dispatch(answerQ(1, answer));
    },
    answerQ2: (answer) => {
      dispatch(answerQ(2, answer));
    },
    answerQ3: (answer) => {
      dispatch(answerQ(3, answer));
    },
  };
};

const mapStateToProps = (state) => {
  const {
    q: {
      currentQ,
      wrongGuesses,
      hintText,
    }
  } = state;

  return {
    currentQ,
    wrongGuesses,
    hintText,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QContainer);
