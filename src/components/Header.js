import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myLogo from './logoCookbook.png';
import { NavLink } from 'react-router-dom';
import Subscribe from './Subscribe';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleSubscribeClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar
        className="color-nav"
        collapseOnSelect
        expand="lg"
        bg="#C0DEFF"
        variant="light"
        style={{ width: '100%', position: 'sticky', top: 0 }}
      >
        <Container>
          <Navbar fixed="top" />
          <NavLink className="nav-link" to="/">
            <Navbar.Brand className="brand-nav">
              <img
                src={myLogo}
                style={{ width: 65, marginTop: 2, marginRight: 20 }}
                alt="logo"
              />
              Perfect Burgers
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
              <NavDropdown title="Categories">
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/top">
                    TOP Recipes
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/latest">
                    Latest Recipes
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleSubscribeClick}>Subscribe</Nav.Link>
              <NavLink className="nav-link" to="/login">
                Log In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Subscribe show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;