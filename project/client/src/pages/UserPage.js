import React from 'react';
import { Form, FormInput, FormGroup, Button, Card, CardBody, CardTitle, Progress } from "shards-react";

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

import { RadarChart } from 'react-vis';
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
            userwatchedDetails: [],
            userwatchingDetails: [],
            userratedDetails: []
        }
    }

    componentDidMount() {

        getUserProfile(this.state.selectedUserId).then(res => {
            this.setState({ userwatuserprofileDetailschedDetails: res.results })
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
                <MenuBar />
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>Profile</h3>
                </div>


                <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh' }}>
                    <h3>You have watched</h3>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                    }}
                                    cover={<img alt="anime_pic" src={this.state.userwatchedDetails[0].url} />}
                                >
                                    <Meta title={this.state.userwatchedDetails[0].Name} />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }

}

export default UserPage

