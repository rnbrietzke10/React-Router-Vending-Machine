import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link exact href='/'>
            Home
          </Nav.Link>
          <Nav.Link exact href='/cookies'>
            Cookies
          </Nav.Link>
          <Nav.Link exact href='/soda'>
            Soda
          </Nav.Link>
          <Nav.Link exact href='/icecream'>
            Ice Cream
          </Nav.Link>
          <Nav.Link exact href='doughnuts'>
            Doughnuts
          </Nav.Link>
          <Nav.Link exact href='/chips'>
            Chips
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
