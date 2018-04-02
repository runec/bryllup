import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { answerQ, showHint } from '../actions';

import Q1 from '../components/Q1';
import Q2 from '../components/Q2';
import Q3 from '../components/Q3';
import Q4 from '../components/Q4';
import Win from '../components/Win';

class QContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.currentQ === 1) {
      return (
        <div>
        <Q1 onSubmit={this.props.answerQ1} />
        <div style={{textAlign: 'center'}}>Brugte gæt: {this.props.wrongGuesses}</div>
        <div onClick={this.props.showHint} style={{fontWeight: 'bold', textAlign: 'center', cursor: 'pointer'}}>Hint: {this.props.showQHint ? this.props.hintText : '3 gæt først'}</div>
      </div>
        // tree
      );
    } else if(this.props.currentQ === 2) {
      return (
        <div>
        <Q2 onSubmit={this.props.answerQ2} />
        <div style={{textAlign: 'center'}}>Brugte gæt: {this.props.wrongGuesses}</div>
        <div onClick={this.props.showHint} style={{fontWeight: 'bold', textAlign: 'center', cursor: 'pointer'}}>Hint: {this.props.showQHint ? this.props.hintText : '3 gæt først'}</div>
      </div>
        // hp
      );
    } else if(this.props.currentQ === 3) {
      return (
      <div>
        <Q3 onSubmit={this.props.answerQ3} />
      </div>
        // circle?
      );
    } else if(this.props.currentQ === 4) {
      // pal
      return (
        <div>
        <Q4 onSubmit={this.props.answerQ4} />
        <div style={{textAlign: 'center'}}>Brugte gæt: {this.props.wrongGuesses}</div>
        <div onClick={this.props.showHint} style={{fontWeight: 'bold', textAlign: 'center', cursor: 'pointer'}}>Hint: {this.props.showQHint ? this.props.hintText : '3 gæt først'}</div>
      </div>
      );
    } else {
      return (
        <Win />
      );
    }
  }
}

QContainer.propTypes = {
  answerQ1: PropTypes.func.isRequired,
  answerQ2: PropTypes.func.isRequired,
  answerQ3: PropTypes.func.isRequired,
  answerQ4: PropTypes.func.isRequired,
  currentQ: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  wrongGuesses: PropTypes.number.isRequired,
  hintText: PropTypes.string.isRequired,
  showHint: PropTypes.func.isRequired,
  showQHint: PropTypes.bool.isRequired,
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
    answerQ4: (answer) => {
      dispatch(answerQ(4, answer));
    },
    showHint: () => dispatch(showHint())
  };
};

const mapStateToProps = (state) => {
  const {
    q: {
      currentQ,
      wrongGuesses,
      hintText,
      showQHint,
    }
  } = state;

  return {
    currentQ,
    wrongGuesses,
    hintText,
    showQHint,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QContainer);
