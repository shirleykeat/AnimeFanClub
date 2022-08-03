import React from 'react';
import { Card, CardBody } from "shards-react";

import {
    Row,
    Col
} from 'antd';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import { getUserProfile, getUserWatched, getUserWatching, getUserRated } from '../fetcher';
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
            userwatchedDetails0: [],
            userwatchedDetails1: [],
            userwatchedDetails2: [],
            userwatchedDetails3: [],
            userwatchedDetails4: [],
            userwatchedDetails5: [],
            userwatchingDetails: null,
            userwatchingDetails0: [],
            userwatchingDetails1: [],
            userwatchingDetails2: [],
            userwatchingDetails3: [],
            userwatchingDetails4: [],
            userwatchingDetails5: [],
            userratedDetails: null,
            userratedDetails0: [],
            userratedDetails1: [],
            userratedDetails2: [],
            userratedDetails3: [],
            userratedDetails4: [],
            userratedDetails5: []
        }
    }

    componentDidMount() {

        getUserProfile(this.state.selectedUserId).then(res => {
            this.setState({ userprofileDetails: res.results[0] })
        })

        getUserWatched(this.state.selectedUserId).then(res => {
            this.setState({ userwatchedDetails: res.results })
            this.setState({ userwatchedDetails0: res.results[0] })
            this.setState({ userwatchedDetails1: res.results[1] })
            this.setState({ userwatchedDetails2: res.results[2] })
            this.setState({ userwatchedDetails3: res.results[3] })
            this.setState({ userwatchedDetails4: res.results[4] })
            this.setState({ userwatchedDetails5: res.results[5] })
        })

        getUserWatching(this.state.selectedUserId).then(res => {
            this.setState({ userwatchingDetails: res.results })
            this.setState({ userwatchingDetails0: res.results[0] })
            this.setState({ userwatchingDetails1: res.results[1] })
            this.setState({ userwatchingDetails2: res.results[2] })
            this.setState({ userwatchingDetails3: res.results[3] })
            this.setState({ userwatchingDetails4: res.results[4] })
            this.setState({ userwatchingDetails5: res.results[5] })
        })

        getUserRated(this.state.selectedUserId).then(res => {
            this.setState({ userratedDetails: res.results })
            this.setState({ userratedDetails0: res.results[0] })
            this.setState({ userratedDetails1: res.results[1] })
            this.setState({ userratedDetails2: res.results[2] })
            this.setState({ userratedDetails3: res.results[3] })
            this.setState({ userratedDetails4: res.results[4] })
            this.setState({ userratedDetails5: res.results[5] })
        })

    }


    render() {

        return (
            <div>
                <div>
                    <MenuBar />
                </div>

                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>Profile</h3>
                    <p>ID: {this.state.userprofileDetails.USER_ID}</p>
                    <p>Name: {this.state.userprofileDetails.Name}</p>
                    <p>Birthday: {this.state.userprofileDetails.Birthday}</p>
                    <p>Email: {this.state.userprofileDetails.Email_address}</p>
                </div>

                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>You have watched</h3>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row gutter={16}>
                        <Col span={4} style={{ textAlign: 'center' }}>

                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchedDetails0 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchedDetails0.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchedDetails0.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchedDetails0.Name}
                            </NavLink>

                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchedDetails1 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchedDetails1.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchedDetails1.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchedDetails1.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchedDetails2 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchedDetails2.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchedDetails2.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchedDetails2.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchedDetails3 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchedDetails3.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchedDetails3.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchedDetails3.Name}
                            </NavLink>

                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchedDetails4 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchedDetails4.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchedDetails4.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchedDetails4.Name}
                            </NavLink>

                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchedDetails5 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchedDetails5.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchedDetails5.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchedDetails5.Name}
                            </NavLink>

                        </Col>
                    </Row>
                </div>

                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>You are watching</h3>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row gutter={16}>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchingDetails0 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchingDetails0.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchingDetails0.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchingDetails0.Name}
                            </NavLink>


                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchingDetails1 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchingDetails1.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchingDetails1.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchingDetails1.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchingDetails2 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchingDetails2.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchingDetails2.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchingDetails2.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchingDetails3 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchingDetails3.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchingDetails3.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchingDetails3.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchingDetails4 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchingDetails4.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchingDetails4.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchingDetails4.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userwatchingDetails5 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userwatchingDetails5.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userwatchingDetails5.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userwatchingDetails5.Name}
                            </NavLink>
                        </Col>
                    </Row>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>You have rated</h3>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row gutter={16}>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userratedDetails0 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userratedDetails0.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userratedDetails0.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userratedDetails0.Name}
                            </NavLink>

                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userratedDetails1 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userratedDetails1.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userratedDetails1.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userratedDetails1.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userratedDetails2 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userratedDetails2.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userratedDetails2.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userratedDetails2.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userratedDetails3 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userratedDetails3.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userratedDetails3.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userratedDetails3.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userratedDetails4 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userratedDetails4.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userratedDetails4.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userratedDetails4.Name}
                            </NavLink>
                        </Col>
                        <Col span={4} style={{ textAlign: 'center' }}>
                            <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                                {!this.state.userratedDetails5 ? (
                                    <h5> No results found </h5>
                                ) : (
                                    <img src={this.state.userratedDetails5.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                                )}
                            </Card>
                            <NavLink to={{ pathname: '/anime?id=' + this.state.userratedDetails5.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                {this.state.userratedDetails5.Name}
                            </NavLink>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }

}

export default UserPage

