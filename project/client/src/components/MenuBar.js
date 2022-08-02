import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown, Button, ButtonGroup} from 'react-bootstrap';


function MenuBar(){

  return(
    <Navbar bg = "dark" variant='dark'>
      <Container>
      <Navbar.Brand href="/" style = {{color: "white"}}>My Anime Fan Club</Navbar.Brand>
      <Nav className="homePage">
        <Nav.Link href="/" style = {{color: "white"}}>Home</Nav.Link>
        <NavDropdown title="Categories" id="category-dropdown">
          <NavDropdown.Item  href= "/genres">Genres</NavDropdown.Item>
          <NavDropdown.Item  href= "/types"> Types</NavDropdown.Item>
          <NavDropdown.Item >Sources</NavDropdown.Item>
          <NavDropdown.Item >Ratings</NavDropdown.Item>
        </NavDropdown>
        
      
      </Nav>
      <Nav.Link href="/search" style = {{color: "white"}}>Advanced Search</Nav.Link>
      <Nav>
        <ButtonGroup className="mb-2">
        <Button variant="outline-secondary" style = {{color: "white"}}>Sign In</Button>
        <Button variant="outline-secondary" style = {{color: "white"}}>Sign Up</Button>
        </ButtonGroup>
      </Nav>
      </Container>
    </Navbar>
  )

}

export default MenuBar
