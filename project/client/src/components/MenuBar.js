import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Button, ButtonGroup } from 'react-bootstrap';


class MenuBar extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      email:null,
      id:null
    }

  }
  
  

  componentDidMount(){
    
   const auth = localStorage.getItem('user')
   
   if(auth){
    this.setState({email: auth.email})
    this.setState({id: auth.id})
   }
 }
 
  userLogOut=()=>{
    this.setState({id:null})
    localStorage.removeItem('user')
  }

  render(){
    return (
    <div>
      {this.state.id==null?
        <Navbar bg="dark" variant='dark'>
          <Container>
            <Navbar.Brand href="/" style={{ color: "white" }}>My Anime Fan Club</Navbar.Brand>
            <Nav className="homePage">
              <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
              <NavDropdown title="Categories" id="category-dropdown">
                <NavDropdown.Item href="/genres">Genres</NavDropdown.Item>
                <NavDropdown.Item href="/types"> Types</NavDropdown.Item>
                <NavDropdown.Item href="/source">Sources</NavDropdown.Item>
                <NavDropdown.Item href="rating">Ratings</NavDropdown.Item>
              </NavDropdown>


            </Nav>
            <Nav.Link href="/search/advance_search" style={{ color: "white" }}>Advanced Search</Nav.Link>
            <Nav>
              <ButtonGroup className="mb-2">
                <Button variant="outline-secondary" style={{ color: "white" }} href="/signin">Sign In</Button>
                <Button variant="outline-secondary" style={{ color: "white" }} href="/signup">Sign Up</Button>
              </ButtonGroup>
            </Nav>
          </Container>
        </Navbar>
        :
        <Navbar bg="dark" variant='dark'>
          <Container>
            <Navbar.Brand href="/" style={{ color: "white" }}>My Anime Fan Club</Navbar.Brand>
            <Nav className="homePage">
              <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
              <NavDropdown title="Categories" id="category-dropdown">
                <NavDropdown.Item href="/genres">Genres</NavDropdown.Item>
                <NavDropdown.Item href="/types"> Types</NavDropdown.Item>
                <NavDropdown.Item href="/source">Sources</NavDropdown.Item>
                <NavDropdown.Item href="rating">Ratings</NavDropdown.Item>
              </NavDropdown>


            </Nav>
            <Nav.Link href="/search/advance_search" style={{ color: "white" }}>Advanced Search</Nav.Link>
            <Nav.Link href={"/user/profile?id="+this.state.id} style={{color:"white"}}>{"welcome!"+this.state.email}</Nav.Link>
            <Nav>
              <ButtonGroup className="mb-2">
                <Button variant="outline-secondary" style={{ color: "white" }} onClick={this.userLogOut} >Sign Out</Button>
              </ButtonGroup>
            </Nav>
          </Container>
        </Navbar>
      }
    </div>
    )
  }

}

export default MenuBar
