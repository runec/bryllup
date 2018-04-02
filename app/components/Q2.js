import PropTypes from 'prop-types';
import React from 'react';

import { Button } from 'react-bootstrap';

import { qInput4, qInput5, qInput6 } from '../styles/app.scss';
import { questionDiv } from '../styles/app.scss';

import img from '../images/q2.png';

class Q2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      input3: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const answer = `${this.state.input1} ${this.state.input2} ${this.state.input3}`.toLowerCase();
    this.props.onSubmit(answer);
  }

  render() {
    // overskrift, billed: popcrn, x, x dødblmst
    // svarfelter
    return (
      <div className={questionDiv}>
        <h1>Anden Opgave</h1>
        <div><img src={img} /></div>
        <div>
          <input className={qInput4} maxLength={4} value={this.state.input1} onChange={e => this.setState({input1: e.target.value.toUpperCase()})} />
          <input className={qInput6} maxLength={6} value={this.state.input2} onChange={e => this.setState({input2: e.target.value.toUpperCase()})} />
          <input className={qInput5} maxLength={5} value={this.state.input3} onChange={e => this.setState({input3: e.target.value.toUpperCase()})} />

        </div>
        <div>
          <Button bsStyle="primary" onClick={this.onSubmit}>Svar</Button>
        </div>
      </div>
    );
  }
}

Q2.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Q2;
