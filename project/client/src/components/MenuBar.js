import React from 'react';
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown, Button, ButtonGroup} from 'react-bootstrap';



function MenuBar(){

  const history = useHistory();
  const redirect = (ty, place)=>{
    history.push('../pages/AnimeListPage',{state: {type: ty, placeholder: place}});
  }
  
        return(

          <Navbar bg = "light" expand="lg">
           <Container>
            <Navbar.Brand href="/">My Anime Fan Club</Navbar.Brand>
            <Nav className="homePage">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Genres" id="genres-dropdown">
                <NavDropdown.Item onClick={()=>{redirect("genre", "Action")}} >Action</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Comedy")}}> Comedy</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Drama")}}>Drama</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Mystery")}}>Mystery</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Sci-Fi")}}>Sci-Fi</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Adventure")}}>Adventure</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Supernatural")}}>Supernatural</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Magic")}}>Magic</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Fantacy")}}>Fantasy</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Sports")}}>Sports</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("genre", "Romance")}}>Romance</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Sources" id="sources-dropdown">
                <NavDropdown.Item onClick={()=>{redirect("source", "Original")}}>Original</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Manga")}}> Manga</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Light novel")}}>Light novel</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Visual novel")}}>Visual novel</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Game")}}>Game</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Picture book")}}>Picture book</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Book")}}>Book</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Music")}}>Music</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("source", "Unknown")}}>Unkown</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Types" id="types-dropdown">
                <NavDropdown.Item onClick={()=>{redirect("type", "TV")}}>TV</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("type", "Movie")}}> Movie</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("type", "OVA")}}>OVA</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("type", "Special")}}>Special</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("type", "ONA")}}>ONA</NavDropdown.Item>  
              </NavDropdown>
              <NavDropdown title="Rating" id="rating-dropdown">
                <NavDropdown.Item onClick={()=>{redirect("rating", "G")}}>G</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("rating", "PG")}}>PG</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("rating", "PG-13")}}> PG-13</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("rating", "PG-17")}}>PG-17+</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("rating", "R")}}>R</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{redirect("rating", "Rx")}}>Rx</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href="/search" >Advanced Search</Nav.Link>
            <Nav>
              <ButtonGroup className="mb-2">
              <Button variant="outline-secondary">Sign In</Button>
              <Button variant="outline-secondary">Sign Up</Button>
              </ButtonGroup>
            </Nav>
           </Container>
          </Navbar>
        )
    
}

export default MenuBar
