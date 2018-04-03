import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const MenuBar = () => {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          Test
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/praktisk">
            Praktisk
          </NavItem>
          <NavItem eventKey={1} href="#">
            Overnatning
          </NavItem>
          <NavItem eventKey={1} href="#">
            Ønskeliste
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
