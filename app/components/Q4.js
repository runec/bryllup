import PropTypes from 'prop-types';
import React from 'react';

import { Button } from 'react-bootstrap';

import { qInput3, qInput5, qInput7, qInput9 } from '../styles/app.scss';

import { questionDiv } from '../styles/app.scss';

import img from '../images/pal.png';

class Q4 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const answer = `${this.state.input1} ${this.state.input2} ${this.state.input3} ${this.state.input4}`.toLowerCase();
    this.props.onSubmit(answer);
  }

  render() {
    // overskrift, billed: popcrn, x, x dødblmst
    // svarfelter
    return (
      <div className={questionDiv}>
        <h1>Sidste opgave!</h1>
        <div><img src={img} /></div>
        <div>Kan du gætte det palindrom, som billedet illustrerer?</div>
        <div>
          <input className={qInput3} maxLength={3} value={this.state.input1} onChange={e => this.setState({input1: e.target.value.toUpperCase()})} />
          <input className={qInput9} maxLength={9} value={this.state.input2} onChange={e => this.setState({input2: e.target.value.toUpperCase()})} />
          <input className={qInput5} maxLength={5} value={this.state.input3} onChange={e => this.setState({input3: e.target.value.toUpperCase()})} />
          <input className={qInput7} maxLength={7} value={this.state.input4} onChange={e => this.setState({input4: e.target.value.toUpperCase()})} />

        </div>
        <div>
          <Button bsStyle="primary" onClick={this.onSubmit}>Svar</Button>
        </div>
      </div>
    );
  }
}

Q4.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Q4;
