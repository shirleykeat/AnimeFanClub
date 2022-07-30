import React from 'react';
import { Form, FormInput, FormGroup, Button, CardTitle, Progress } from "shards-react";

import {
    Table,
    Pagination,
    Select,
    Card,
    Row,
    Col,
    Divider,
    Slider,
    Rate
} from 'antd'

import { format } from 'd3-format';

import MenuBar from '../components/MenuBar';
import { getUserProfile, getUserWatched, getUserWatching, getUserRated } from '../fetcher';
const wideFormat = format('.3r');
const { Meta } = Card;

class UserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedUserId: window.location.search ? window.location.search.substring(1).split('=')[1] : 1,
            userprofileDetails: [],
            userwatchedDetails0: [],
            userwatchedDetails1: [],
            userwatchedDetails2: [],
            userwatchedDetails3: [],
            userwatchedDetails4: [],
            userwatchedDetails5: [],
            userwatchingDetails0: [],
            userwatchingDetails1: [],
            userwatchingDetails2: [],
            userwatchingDetails3: [],
            userwatchingDetails4: [],
            userwatchingDetails5: [],
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
            this.setState({ userwatchedDetails0: res.results[0] })
            this.setState({ userwatchedDetails1: res.results[1] })
            this.setState({ userwatchedDetails2: res.results[2] })
            this.setState({ userwatchedDetails3: res.results[3] })
            this.setState({ userwatchedDetails4: res.results[4] })
            this.setState({ userwatchedDetails5: res.results[5] })
        })

        getUserWatching(this.state.selectedUserId).then(res => {
            this.setState({ userwatchingDetails0: res.results[0] })
            this.setState({ userwatchingDetails1: res.results[1] })
            this.setState({ userwatchingDetails2: res.results[2] })
            this.setState({ userwatchingDetails3: res.results[3] })
            this.setState({ userwatchingDetails4: res.results[4] })
            this.setState({ userwatchingDetails5: res.results[5] })
        })

        getUserRated(this.state.selectedUserId).then(res => {
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
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchedDetails0.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchedDetails0.Anime_ID}>{this.state.userwatchedDetails0.Name}</a>
                            </Card>

                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchedDetails1.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchedDetails1.Anime_ID}>{this.state.userwatchedDetails1.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchedDetails2.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchedDetails2.Anime_ID}>{this.state.userwatchedDetails2.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchedDetails3.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchedDetails3.Anime_ID}>{this.state.userwatchedDetails3.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchedDetails4.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchedDetails4.Anime_ID}>{this.state.userwatchedDetails4.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchedDetails5.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchedDetails5.Anime_ID}>{this.state.userwatchedDetails5.Name}</a>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>You are watching</h3>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchingDetails0.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchingDetails0.Anime_ID}>{this.state.userwatchingDetails0.Name}</a>
                            </Card>

                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchingDetails1.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchingDetails1.Anime_ID}>{this.state.userwatchingDetails1.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchingDetails2.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchingDetails2.Anime_ID}>{this.state.userwatchingDetails2.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchingDetails3.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchingDetails3.Anime_ID}>{this.state.userwatchingDetails3.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchingDetails4.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchingDetails4.Anime_ID}>{this.state.userwatchingDetails4.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userwatchingDetails5.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userwatchingDetails5.Anime_ID}>{this.state.userwatchingDetails5.Name}</a>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>You have rated</h3>
                </div>
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userratedDetails0.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userratedDetails0.Anime_ID}>{this.state.userratedDetails0.Name}</a>
                            </Card>

                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userratedDetails1.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userratedDetails1.Anime_ID}>{this.state.userratedDetails1.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userratedDetails2.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userratedDetails2.Anime_ID}>{this.state.userratedDetails2.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userratedDetails3.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userratedDetails3.Anime_ID}>{this.state.userratedDetails3.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userratedDetails4.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userratedDetails4.Anime_ID}>{this.state.userratedDetails4.Name}</a>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card cover={<img src={this.state.userratedDetails5.url} alt={"animePic"} />}>
                                <a href={"../anime?id=" + this.state.userratedDetails5.Anime_ID}>{this.state.userratedDetails5.Name}</a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default UserPage

