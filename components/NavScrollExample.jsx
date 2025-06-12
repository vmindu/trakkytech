import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoHomeSharp } from "react-icons/io5";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" fixed="top" className="bg-body-tertiary mb-4">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'cursive' }} className='d-flex align-items-center justify-content-center'>
           <IoHomeSharp className='d-block d-lg-none' color='red'/>
           <div>
           Trakky
          <p className='d-block d-lg-none'>Samas Boys Hostel, 132 Feet Ring Road</p>

           </div>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/task3">Home</Nav.Link>
            <Nav.Link as={Link} to="/task2">Spa Form</Nav.Link>
            <Nav.Link as={Link} to="/">API Page</Nav.Link>
            <NavDropdown title="Home" id="navbarScrollingDropdown" className='d-block d-lg-none'>
              <NavDropdown.Item as={Link} to="/task3">Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/task2">pa Form</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">API Page</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>Disabled Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Optional User Icon or Profile */}
        <div className="d-flex d-none d-lg-block align-items-center">
          <FaUser style={{ fontSize: '1.2rem' }} />
        </div>
      </Container>
    </Navbar>
  );
}
