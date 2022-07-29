import React from 'react';
import {Card, CardBody} from "shards-react";
import {
  Row,
  Col,
  Divider,
} from 'antd'
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
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
        {/* background setting  */}
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh', backgroundImage: `url()`}}> 
          <h3>Anime</h3>

          <Divider />
          <Divider />

          {this.state.selectedAnimeDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
          <Card>
          <CardBody>

            <Row gutter='30' align='middle' justify='center'>
                
                <Col flex={2} style={{ textAlign: 'left', overflow:'auto'}}>
                <Card style={{height: '60vh', width: '45vh', overflow:'auto'}}>
                <img src={this.state.selectedAnimeDetails.url} referrerpolicy="no-referrer" alt={"MainPic"} style={{height:'60vh'}}/>
                </Card>
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
         


          {this.state.userAlsoWatchDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

            <h3>People Also Watch</h3>
            <Divider />

            <Row gutter='30' justify='center'>
              

              <Col span={4} style={{ textAlign: 'center', overflow:'auto'}}>
                <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>  
                {!this.state.userAlsoWatchDetails[0] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[0].url} referrerpolicy="no-referrer" alt={"Alsowatch1"} style={{height:'25vh'}}/>
                )}
                </Card>
                <NavLink to={{pathname: '/anime?id=' + this.state.userAlsoWatchDetails[0].Anime_ID}} style={{ textDecoration: 'none' , color: 'brown', fontWeight: 'bold'}}>
                {this.state.userAlsoWatchDetails[0].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                {!this.state.userAlsoWatchDetails[1] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[1].url} referrerpolicy="no-referrer" alt={"Alsowatch2"} style={{height:'25vh'}}/>
                )}
                </Card>
                <NavLink to={{pathname: '/anime?id=' + this.state.userAlsoWatchDetails[1].Anime_ID}} style={{ textDecoration: 'none' , color: 'brown', fontWeight: 'bold'}}>
                {this.state.userAlsoWatchDetails[1].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                {!this.state.userAlsoWatchDetails[2] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[2].url} referrerpolicy="no-referrer" alt={"Alsowatch3"} style={{height:'25vh'}}/>
                )}
                </Card>
                <NavLink to={{pathname: '/anime?id=' + this.state.userAlsoWatchDetails[2].Anime_ID}} style={{ textDecoration: 'none' , color: 'brown', fontWeight: 'bold'}}>
                {this.state.userAlsoWatchDetails[2].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                {!this.state.userAlsoWatchDetails[3] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[3].url} referrerpolicy="no-referrer" alt={"Alsowatch4"} style={{height:'25vh'}}/>
                )}
                </Card>
                <NavLink to={{pathname: '/anime?id=' + this.state.userAlsoWatchDetails[3].Anime_ID}} style={{ textDecoration: 'none' , color: 'brown', fontWeight: 'bold'}}>
                {this.state.userAlsoWatchDetails[3].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                {!this.state.userAlsoWatchDetails[4] ? (
                  <h5> No results found </h5>
                ) : (
                  <img src={this.state.userAlsoWatchDetails[4].url} referrerpolicy="no-referrer" alt={"Alsowatch5"} style={{height:'25vh'}}/>
                )}
                </Card>
                <NavLink to={{pathname: '/anime?id=' + this.state.userAlsoWatchDetails[4].Anime_ID}} style={{ textDecoration: 'none' , color: 'brown', fontWeight: 'bold'}}>
                {this.state.userAlsoWatchDetails[4].Name}
                </NavLink>
              </Col>
            </Row>


          </div> : null}


          <Divider />


          {this.state.TopScoreAnimeInSameGenresDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

              <h3>Top Score Anime in Same Genres</h3>
              <Divider />

  
              <Row gutter='30' justify='center'>


                <Col span={4} style={{ textAlign: 'center' }}>
                  <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[0] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[0].url} referrerpolicy="no-referrer" alt={"Alsowatch1"} style={{height:'25vh'}}/>
                  )}
                  </Card>
                  {this.state.TopScoreAnimeInSameGenresDetails[0].Name}
                </Col>
  
                <Col span={4} style={{ textAlign: 'center' }}>
                  <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[1] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[1].url} referrerpolicy="no-referrer" alt={"Alsowatch2"} style={{height:'25vh'}}/>
                  )}
                  </Card>
                  {this.state.TopScoreAnimeInSameGenresDetails[1].Name}
                </Col>
  
                <Col span={4} style={{ textAlign: 'center' }}>
                  <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[2] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[2].url} referrerpolicy="no-referrer" alt={"Alsowatch3"} style={{height:'25vh'}}/>
                  )}
                  </Card>
                  {this.state.TopScoreAnimeInSameGenresDetails[2].Name}
                </Col>
  
  
                <Col span={4} style={{ textAlign: 'center' }}>
                  <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>  
                  {!this.state.TopScoreAnimeInSameGenresDetails[3] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[3].url} referrerpolicy="no-referrer" alt={"Alsowatch4"} style={{height:'25vh'}}/>
                  )}
                  </Card>
                  {this.state.TopScoreAnimeInSameGenresDetails[3].Name}
                </Col>
  
                <Col span={4} style={{ textAlign: 'center' }}>
                  <Card style={{height: '25vh', width: '19vh', overflow:'auto'}}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[4] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[4].url} referrerpolicy="no-referrer" alt={"Alsowatch5"} style={{height:'25vh'}}/>
                  )}
                  </Card>
                  {this.state.TopScoreAnimeInSameGenresDetails[4].Name}  
                </Col>
              </Row>

  
            </div> : null}


        </div>
      </div>
    )
  }

}

export default AnimePage

