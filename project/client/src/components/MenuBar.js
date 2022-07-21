import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';

class MenuBar extends React.Component {
    render() {
        return(

          <Navbar bg = "light" expand="lg">
           <Container>
            <Navbar.Brand href="/">My Anime Fan Club</Navbar.Brand>
            <Nav className="homePage">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Genres" id="genres-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item > Comedy</NavDropdown.Item>
                <NavDropdown.Item >Drama</NavDropdown.Item>
                <NavDropdown.Item >Mystery</NavDropdown.Item>
                <NavDropdown.Item >Sci-Fi</NavDropdown.Item>
                <NavDropdown.Item >Adventure</NavDropdown.Item>
                <NavDropdown.Item >Supernatural</NavDropdown.Item>
                <NavDropdown.Item >Magic</NavDropdown.Item>
                <NavDropdown.Item >Fantasy</NavDropdown.Item>
                <NavDropdown.Item >Sports</NavDropdown.Item>
                <NavDropdown.Item >Romance</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sources" id="sources-dropdown">
                <NavDropdown.Item >Original</NavDropdown.Item>
                <NavDropdown.Item > Manga</NavDropdown.Item>
                <NavDropdown.Item >Light novel</NavDropdown.Item>
                <NavDropdown.Item >Visual novel</NavDropdown.Item>
                <NavDropdown.Item >Game</NavDropdown.Item>
                <NavDropdown.Item >Picture book</NavDropdown.Item>
                <NavDropdown.Item >Book</NavDropdown.Item>
                <NavDropdown.Item >Music</NavDropdown.Item>
                <NavDropdown.Item >Unkown</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Types" id="types-dropdown">
                <NavDropdown.Item >TV</NavDropdown.Item>
                <NavDropdown.Item > Movie</NavDropdown.Item>
                <NavDropdown.Item >OVA</NavDropdown.Item>
                <NavDropdown.Item >Special</NavDropdown.Item>
                <NavDropdown.Item >Movie</NavDropdown.Item>
                <NavDropdown.Item >ONA</NavDropdown.Item>  
              </NavDropdown>
              <NavDropdown title="Rating" id="rating-dropdown">
                <NavDropdown.Item>G</NavDropdown.Item>
                <NavDropdown.Item >PG</NavDropdown.Item>
                <NavDropdown.Item > PG-13</NavDropdown.Item>
                <NavDropdown.Item >PG-17+</NavDropdown.Item>
                <NavDropdown.Item >R</NavDropdown.Item>
                <NavDropdown.Item>Rx</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button variant="outline-secondary">Sign In</Button>
              <Button variant="outline-secondary">Sign Up</Button>
            </Nav>
           </Container>
          </Navbar>
        )
    }
}

export default MenuBar
