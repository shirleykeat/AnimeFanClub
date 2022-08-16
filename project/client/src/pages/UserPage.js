import React from 'react';
import MenuBar from '../components/MenuBar';
import { getUserProfile, getUserWatched, getUserWatching, getUserRated } from '../fetcher';
import { Container, Nav, Navbar, NavDropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import AnimeList from '../components/AnimeList';

class UserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedUserId: window.location.search ? window.location.search.substring(1).split('=')[1] : 1,
            userprofileDetails: [],
            userwatchedDetails: null,
            userwatchingDetails: null,
            userratedDetails: null
        }
    }

    componentDidMount() {

        getUserProfile(this.state.selectedUserId).then(res => {
            this.setState({ userprofileDetails: res.results[0] })
        })

        getUserWatched(this.state.selectedUserId).then(res => {
            this.setState({ userwatchedDetails: res.results })
        })

        getUserWatching(this.state.selectedUserId).then(res => {
            this.setState({ userwatchingDetails: res.results })
        })

        getUserRated(this.state.selectedUserId).then(res => {
            this.setState({ userratedDetails: res.results })
        })

    }


    render() {

        return (
            <div>
                <div>
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
                                    <Button variant="outline-secondary" style={{ color: "white" }} href={"../user?id=" + this.state.selectedUserId}>{this.state.userprofileDetails.Name}</Button>
                                    <Button variant="outline-secondary" style={{ color: "white" }} href="/">Sign Out</Button>
                                </ButtonGroup>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>

                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <div class="text-center">
                        <h4>Profile</h4>
                    </div>
                    <p>ID: {this.state.userprofileDetails.USER_ID}</p>
                    <p>Name: {this.state.userprofileDetails.Name}</p>
                    <p>Birthday: {this.state.userprofileDetails.Birthday}</p>
                    <p>Email: {this.state.userprofileDetails.Email_address}</p>
                </div>

                {this.state.userwatchedDetails && this.state.userwatchedDetails.length !== 0 ?
                    <div>
                        <div class="text-center">
                            <h4>You have watched</h4>
                        </div>
                        <div className='container-fluid' style={{ overflow: "auto" }} >
                            <AnimeList animes={this.state.userwatchedDetails} />
                        </div>
                    </div> :
                    <></>
                }


                {this.state.userwatchingDetails && this.state.userwatchingDetails.length !== 0 ?
                    <div>
                        <div class="text-center">
                            <h4>You are watching</h4>
                        </div>
                        <div className='container-fluid' style={{ overflow: "auto" }} >
                            <AnimeList animes={this.state.userwatchingDetails} />
                        </div>
                    </div> :
                    <></>
                }

                {this.state.userratedDetails && this.state.userratedDetails.length !== 0 ?
                    <div>
                        <div class="text-center">
                            <h4>You have rated</h4>
                        </div>
                        <div className='container-fluid' style={{ overflow: "auto" }} >
                            <AnimeList animes={this.state.userratedDetails} />
                        </div>
                    </div> :
                    <></>
                }

            </div>
        )
    }

}

export default UserPage

