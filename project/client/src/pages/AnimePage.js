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
import { getAnime } from '../fetcher';
// import { getAllMatches, getAllPlayers } from '../fetcher'
const wideFormat = format('.3r');

class Anime extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedAnimeId: window.location.search,
      selectedAnimeDetails: null

    }
  }

  componentDidMount() {
    
    getAnime(this.state.selectedAnimeId).then(res => {
      this.setState({ selectedAnimeDetails: res.results[0] })
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

              <Card>
              <CardBody>

            <Row gutter='30' align='middle' justify='center'>
            {/* <Col flex={2} style={{ textAlign: 'left' }}>
            <h3>{this.state.selectedPlayerDetails.Name}</h3>

            </Col> */}

            <Col flex={2} style={{ textAlign: 'right' }}>
            {/* <img src={this.state.selectedAnimeDetails.url} referrerpolicy="no-referrer" alt={null} style={{height:'15vh'}}/> */}

            </Col>
            </Row>
            


          </CardBody>
          </Card>



        </div>
      </div>
    )
  }

}

export default Anime

