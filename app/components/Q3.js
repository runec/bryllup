import PropTypes from 'prop-types';
import React from 'react';

import { Button } from 'react-bootstrap';

import { questionDiv } from '../styles/app.scss';
import img from '../images/cirkel.png';

class Q3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showWarning: false};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(answer) {
    this.props.onSubmit(answer);
  }

  render() {
    // overskrift, billed: popcrn, x, x dødblmst
    // svarfelter
    return (
      <div className={questionDiv}>
        <h1>Tredje opgave</h1>
        <div style={{marginLeft: '50px'}}><img src={img} /></div>
        <div>Hvor mange kanter har en cirkel?</div>
        {this.state.showWarning ? <div>Du er uforbederlig!</div> : null}
        <div>
          <Button bsStyle="danger" style={{width: '100px', marginRight: '50px'}} onClick={() => {
            if(this.state.showWarning) {
              this.onSubmit(true);
            } else {
              this.setState({showWarning: true});
            }
          }}>0</Button>
          <Button bsStyle="success" style={{width: '100px'}} onClick={() => this.onSubmit(true)}>1</Button>
        </div>
      </div>
    );
  }
}

Q3.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Q3;
