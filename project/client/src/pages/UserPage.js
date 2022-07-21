import React from 'react';
import { Form, FormInput, FormGroup, Button, Card, CardBody, CardTitle, Progress } from "shards-react";

import {
    Table,
    Pagination,
    Select,
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
                    <h3>Anime</h3>

                    <Divider />
                    <Divider />

                    {this.state.selectedAnimeDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
                        <Card>
                            <CardBody>

                                <Row gutter='30' align='middle' justify='center'>



                                    <Col flex={2} style={{ textAlign: 'left' }}>
                                        <img src={this.state.selectedAnimeDetails.url} referrerpolicy="no-referrer" alt={null} style={{ height: '60vh' }} />
                                    </Col>

                                    <Col flex={2} style={{ textAlign: 'left' }}>
                                        <h3>{this.state.selectedAnimeDetails.Name}</h3>
                                        <h5>{this.state.selectedAnimeDetails.Japanese_name}</h5>
                                        <h5>{this.state.selectedAnimeDetails.Type}</h5>
                                    </Col>



                                </Row>



                            </CardBody>
                        </Card>

                        <Divider />
                        <Divider />




                    </div> : null}

                    {this.state.userAlsoWatchDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>


                        <Card>
                            <CardBody>

                                <Row gutter='30' align='middle' justify='center'>

                                    <Col flex={2} style={{ textAlign: 'left' }}>
                                        <img src={this.state.userAlsoWatchDetails.url} referrerpolicy="no-referrer" alt={null} style={{ height: '25vh' }} />
                                    </Col>


                                </Row>


                            </CardBody>
                        </Card>

                    </div> : null}
                </div>
            </div>
        )
    }

}

export default UserPage

