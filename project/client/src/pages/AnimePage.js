import React from 'react';
import {Card, CardBody} from "shards-react";
import {
  Row,
  Col,
  Divider,
} from 'antd'
import 'antd/dist/antd.min.css';


// import { RadarChart } from 'react-vis';
// import { format } from 'd3-format';

import MenuBar from '../components/MenuBar';
import { getAnime, anime_userAlsoWatch, anime_TopinsameGenres } from '../fetcher';

// const wideFormat = format('.3r');

class AnimePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedAnimeId: window.location.search ? window.location.search.substring(1).split('=')[1] : 1,
      selectedAnimeDetails: null,
      userAlsoWatchDetails: null,
      TopScoreAnimeInSameGenresDetails: null

    }
  }

  componentDidMount() {
    
    getAnime(this.state.selectedAnimeId).then(res => {
      this.setState({ selectedAnimeDetails: res.results[0] })
    })  

    anime_userAlsoWatch(this.state.selectedAnimeId).then(res => {
      this.setState({ userAlsoWatchDetails: res.results})
    })

    anime_TopinsameGenres(this.state.selectedAnimeId).then(res => {
      this.setState({ TopScoreAnimeInSameGenresDetails: res.results})
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
                <img src={this.state.selectedAnimeDetails.url} referrerpolicy="no-referrer" alt={"MainPic"} style={{height:'60vh'}}/>
                </Col>

                <Col flex={2} style={{ textAlign: 'left' }}>
                <h3>{this.state.selectedAnimeDetails.Name}</h3>
                <h5>{this.state.selectedAnimeDetails.Japanese_name}</h5>
                <h5>{this.state.selectedAnimeDetails.Type}</h5>
                </Col>

            </Row>
            
          </CardBody>
          </Card>

          </div> : null}


          <Divider />
          <Divider />


          {this.state.userAlsoWatchDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

          {/* <Card> */}
            <h3>People Also Watch</h3>
          {/* <CardBody> */}

            <Row gutter='30' justify='center'>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh'}}>  
                {!this.state.userAlsoWatchDetails[0] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[0].url} referrerpolicy="no-referrer" alt={"Alsowatch1"} style={{height:'25vh'}}/>
                )}
                </Card>
                {this.state.userAlsoWatchDetails[0].Name}
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh'}}>
                {!this.state.userAlsoWatchDetails[1] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[1].url} referrerpolicy="no-referrer" alt={"Alsowatch2"} style={{height:'25vh'}}/>
                )}
                </Card>
                {this.state.userAlsoWatchDetails[1].Name}
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh'}}>
                {!this.state.userAlsoWatchDetails[2] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[2].url} referrerpolicy="no-referrer" alt={"Alsowatch3"} style={{height:'25vh'}}/>
                )}
                </Card>
                {this.state.userAlsoWatchDetails[2].Name} 
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh'}}>
                {!this.state.userAlsoWatchDetails[3] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[3].url} referrerpolicy="no-referrer" alt={"Alsowatch4"} style={{height:'25vh'}}/>
                )}
                </Card>
                {this.state.userAlsoWatchDetails[3].Name}
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh'}}>
                {!this.state.userAlsoWatchDetails[4] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[4].url} referrerpolicy="no-referrer" alt={"Alsowatch5"} style={{height:'25vh'}}/>
                )}
                </Card>
                {this.state.userAlsoWatchDetails[4].Name}
              </Col>
            </Row>


          {/* </CardBody>
          </Card> */}

          </div> : null}


          <Divider />
          <Divider />


          {this.state.TopScoreAnimeInSameGenresDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

            <Card>
              <h3>Top Score Anime in Same Genres</h3>
            <CardBody>
  
              <Row gutter='30' align='middle' justify='center'>
  
                <Col flex={2} style={{ textAlign: 'center' }}>
                <h5> {this.state.TopScoreAnimeInSameGenresDetails[0].Name} </h5>  
                  {!this.state.TopScoreAnimeInSameGenresDetails[0] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[0].url} referrerpolicy="no-referrer" alt={"Alsowatch1"} style={{height:'25vh'}}/>
                  )}
                </Col>
  
                <Col flex={2} style={{ textAlign: 'center' }}>
                <h5> {this.state.TopScoreAnimeInSameGenresDetails[1].Name} </h5>  
                  {!this.state.TopScoreAnimeInSameGenresDetails[1] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[1].url} referrerpolicy="no-referrer" alt={"Alsowatch2"} style={{height:'25vh'}}/>
                  )}
                </Col>
  
                <Col flex={2} style={{ textAlign: 'center' }}>
                <h5> {this.state.TopScoreAnimeInSameGenresDetails[2].Name} </h5>  
                  {!this.state.TopScoreAnimeInSameGenresDetails[2] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[2].url} referrerpolicy="no-referrer" alt={"Alsowatch3"} style={{height:'25vh'}}/>
                  )}
                </Col>
  
  
                <Col flex={2} style={{ textAlign: 'center' }}>
                <h5> {this.state.TopScoreAnimeInSameGenresDetails[3].Name} </h5>  
                  {!this.state.TopScoreAnimeInSameGenresDetails[3] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[3].url} referrerpolicy="no-referrer" alt={"Alsowatch4"} style={{height:'25vh'}}/>
                  )}
                </Col>
  
                <Col flex={2} style={{ textAlign: 'center' }}>
                <h5> {this.state.TopScoreAnimeInSameGenresDetails[4].Name} </h5>  
                  {!this.state.TopScoreAnimeInSameGenresDetails[4] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[4].url} referrerpolicy="no-referrer" alt={"Alsowatch5"} style={{height:'25vh'}}/>
                  )}
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

export default AnimePage

