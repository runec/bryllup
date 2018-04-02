import PropTypes from 'prop-types';
import React from 'react';

import { Button } from 'react-bootstrap';

import { questionDiv } from '../styles/app.scss';

import img from '../images/q1.png';

class Q1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: 1,
      input2: 1,
      input3: 1,
      input4: 1,
    };

    this.selectOptions = [];
    for(let i = 1; i <= 24; i++) {
      this.selectOptions.push(
        <option value={i} key={i}>{i}</option>
      );
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const answer = `${this.state.input1}-${this.state.input2}-${this.state.input3}-${this.state.input4}`;
    this.props.onSubmit(answer);
  }

  render() {
    // overskrift, billed: popcrn, x, x dødblmst
    // svarfelter
    return (
      <div className={questionDiv}>
        <h1>Første opgave</h1>
        <div><img src={img} /></div>
        <div>
          <select value={this.state.input1} onChange={e => this.setState({input1: e.target.value})}>{this.selectOptions}</select>-
          <select value={this.state.input2} onChange={e => this.setState({input2: e.target.value})}>{this.selectOptions}</select>-
          <select value={this.state.input3} onChange={e => this.setState({input3: e.target.value})}>{this.selectOptions}</select>-
          <select value={this.state.input4} onChange={e => this.setState({input4: e.target.value})}>{this.selectOptions}</select>
        </div>
        <div>
          <Button bsStyle="primary" onClick={this.onSubmit}>Svar</Button>
        </div>
      </div>
    );
  }
}

Q1.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Q1;
