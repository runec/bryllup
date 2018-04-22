import React from 'react';

import PropTypes from 'prop-types';

import {
  Form,
  FormControl,
  FormGroup,
  Col,
  ControlLabel,
  Checkbox,
  Button
} from 'react-bootstrap';

import ContentBox from './general/ContentBox';

import {TilmeldingBox} from '../styles/app.scss';

class Tilmelding extends React.Component {
  constructor() {
    super();
    this.state = {
      names: '',
      allergies: '',
      musicChoices: '',
      attendingBrunch: false,
    };
    this.onTilmeld = this.onTilmeld.bind(this);
  }

  onTilmeld() {
    this.props.onTilmeld(this.state.names, this.state.allergies, this.state.musicChoices, this.state.attendingBrunch);
  }


  render() {
    let bottomPart;

    if(this.props.tilmeldStatus === 'FAILURE') {
      bottomPart = (<span><Button type="button" onClick={this.onTilmeld}>Tilmeld</Button> Tilmelding mislykkedes. Prøv igen</span>);
    } else if(this.props.tilmeldStatus === 'PENDING') {
      bottomPart = (<span>Venter på svar...</span>);
    } else if(this.props.tilmeldStatus === 'SUCCESS') {
      bottomPart = (<span><Button type="button" onClick={this.onTilmeld}>Tilmeld</Button> Tak for tilmeldingen!</span>);
    } else {
      bottomPart = (<Button type="button" onClick={this.onTilmeld}>Tilmeld</Button>);
    }

    return (
      <ContentBox id={TilmeldingBox}>
        <h2>
          TILMELDING
        </h2>
        <Form horizontal>
    <FormGroup controlId="formHorizontalNames">
      <Col componentClass={ControlLabel} sm={4}>
        Navn(e)
      </Col>
      <Col sm={8}>
        <FormControl type="text" placeholder="Navn" value={this.state.names} onChange={(e)=>this.setState({names: e.target.value})}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalAllergies">
      <Col componentClass={ControlLabel} sm={4}>
        Allergier
      </Col>
      <Col sm={8}>
        <FormControl type="text" value={this.state.allergies} onChange={(e)=>this.setState({allergies: e.target.value})} />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={4}>
        Musikønsker
      </Col>
      <Col sm={8}>
        <FormControl type="textarea" componentClass="textarea" value={this.state.musicChoices} onChange={(e)=>this.setState({musicChoices: e.target.value})}/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col componentClass={ControlLabel} sm={4}>
        Spiser med til brunch søndag
      </Col>
      <Col sm={8}>
        <Checkbox checked={this.state.attendingBrunch} onClick={()=>this.setState({attendingBrunch: !this.state.attendingBrunch})}/>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={4} sm={8}>
        {bottomPart}
      </Col>
    </FormGroup>
  </Form>

      </ContentBox>
    );
  }

}

Tilmelding.propTypes = {
  onTilmeld: PropTypes.func.isRequired,
  tilmeldStatus: PropTypes.oneOf(['NOT_SENT', 'PENDING', 'SUCCESS', 'FAILURE']).isRequired,
};

export default Tilmelding;
