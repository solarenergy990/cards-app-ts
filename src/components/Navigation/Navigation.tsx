import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">Cards Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="pills" defaultActiveKey="home">
            <NavLink
              to="home"
              className={({ isActive }) => {
                return isActive ? s['nav-active'] : s.nav;
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="cards"
              className={({ isActive }) => {
                return isActive ? s['nav-active'] : s.nav;
              }}
            >
              Cards
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
