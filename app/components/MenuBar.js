import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { MenuBar as MenuBarClass } from '../styles/app.scss';

const MenuBar = ({goToLocation}) => {
  return (
    <Navbar fluid className={MenuBarClass}>
      <Navbar.Header>
        <Navbar.Brand>
          <div style={{cursor: 'pointer'}} onClick={() => goToLocation('/')}>TANJA + RUNE</div>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} onClick={()=> goToLocation('/praktisk')}>
            Praktisk
          </NavItem>
          <NavItem eventKey={2} href="#">
            Overnatning
          </NavItem>
          <NavItem eventKey={3} href="#">
            Ønskeliste
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

MenuBar.propTypes = {
  goToLocation: PropTypes.func.isRequired,
};

export default MenuBar;
