import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import myLogo from "./logo_CN.png";
import { NavLink } from "react-router-dom";
import Subscribe from "./Subscribe";
import "./Header.css";

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
        variant="light"
        style={{ width: "100%", position: "sticky", top: 0 }}
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
              CINEHOUSE
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/plans">
                Plans
              </NavLink>
              <NavDropdown title="Categories">
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/top">
                    TOP Films
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/action">
                    Action
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/adventure">
                    Adventure
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/drama">
                    Drama
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/horror">
                    Horror
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/sci-fi">
                    Sci-fi
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/comedy">
                    Comedy
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link" to="/crime">
                    Crime
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavLink className="btn btn-outline-light" to="/newMovie">
                Add Movie
              </NavLink>
              <Nav.Link onClick={handleSubscribeClick}>Settings</Nav.Link>
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
