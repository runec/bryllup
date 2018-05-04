import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { MenuBar as MenuBarClass, MenuDate } from '../styles/app.scss';

import TanjaOgRuneBrand from '../images/tanjaogrune.png';

const MenuBar = ({goToLocation}) => {
  return (
    <Navbar fluid id={MenuBarClass}>
      <Navbar.Header>
        <Navbar.Brand>
          <div style={{cursor: 'pointer'}} onClick={() => goToLocation('/')}><img src={TanjaOgRuneBrand}/></div>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} onClick={()=> goToLocation('/praktisk')}>
          Praktisk
        </NavItem>
        <NavItem eventKey={4} onClick={() => goToLocation('/transport')}>
          Transport
        </NavItem>

        <NavItem eventKey={3} onClick={() => goToLocation('/wishlist')}>
          Ønskeliste
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>
          <span id={MenuDate}>11. august 2018, kl. 13<span style={{verticalAlign: 'super', fontSize: '50%'}}>30</span></span>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

MenuBar.propTypes = {
  goToLocation: PropTypes.func.isRequired,
};

export default MenuBar;
