import React from 'react';
import { Card, CardBody } from "shards-react";
import {
  Space,
  Tooltip,
  Tag,
  Statistic,
  Rate,
  Row,
  Col,
  Divider,
} from 'antd'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import { LikeOutlined } from '@ant-design/icons';


// import { RadarChart } from 'react-vis';
// import { format } from 'd3-format';

import MenuBar from '../components/MenuBar';
import { getAnime, getAnimeDescription, getAnimeGenres, anime_userAlsoWatch, anime_TopinsameGenres } from '../fetcher';
import Item from 'antd/lib/list/Item';


// const { CheckableTag } = Tag;
// const tagsData = ['Comedy', 'Music', 'Action', 'Kids', 'Fantasy', 'Slice of Life', 'Adventure', 'Drama', 'Sci-Fi', 'School'];
// const handleChange = (tag, checked) => {
//   const nextSelectedTags = checked
//     ? [...selectedTags, tag]
//     : selectedTags.filter((t) => t !== tag);
//   console.log('You are interested in: ', nextSelectedTags);
//   setSelectedTags(nextSelectedTags);
// }; 
// const [selectedTags, setSelectedTags] = useState(['Books']);

// const wideFormat = format('.3r');

class AnimePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedAnimeId: window.location.search ? window.location.search.substring(1).split('=')[1] : 1,
      selectedAnimeDetails: null,
      selectedAnimeDescription: null,
      selectedAnimeGenres: null,
      Genreslist: null,
      userAlsoWatchDetails: null,
      TopScoreAnimeInSameGenresDetails: null

    }

  }


  componentDidMount() {

    getAnime(this.state.selectedAnimeId).then(res => {
      this.setState({ selectedAnimeDetails: res.results[0] })
    })

    getAnimeDescription(this.state.selectedAnimeId).then(res => {
      this.setState({ selectedAnimeDescription: res.results[0] })
    })

    getAnimeGenres(this.state.selectedAnimeId).then(res => {
      this.setState({ selectedAnimeGenres: res.results })
    })

    anime_userAlsoWatch(this.state.selectedAnimeId).then(res => {
      this.setState({ userAlsoWatchDetails: res.results })
    })

    anime_TopinsameGenres(this.state.selectedAnimeId).then(res => {
      this.setState({ TopScoreAnimeInSameGenresDetails: res.results })
    })

  }


  render() {

    return (
      <div style={{ backgroundColor: 'lightgrey' }}>
        <MenuBar />
        {/* background setting if needed */}
        <div style={{ width: '70vw', margin: '0 auto', marginTop: '5vh', backgroundImage: `url()` }}>

          <Divider />

          {this.state.selectedAnimeDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
            <Card>
              <CardBody>

                <Row gutter='30' align='middle' justify='center'>

                  {/* Main picture */}
                  <Col flex={2} style={{ textAlign: 'left', overflow: 'auto' }}>
                    <Card style={{ height: '47vh', width: '34vh', overflow: 'auto' }}>
                      <img src={this.state.selectedAnimeDetails.url} referrerpolicy="no-referrer" alt={"MainPic"} style={{ height: '47vh' }} />
                    </Card>
                  </Col>

                  {/* Anime Name */}
                  <Col flex={2} style={{ textAlign: 'left' }}>
                    <h3 style={{ fontFamily: 'arial' }}>{this.state.selectedAnimeDetails.Name}</h3>
                    <h5 style={{ fontFamily: 'arial' }}>{this.state.selectedAnimeDetails.Type}</h5>
                    {/* Anime Score */}
                    <Rate disabled defaultValue={this.state.selectedAnimeDetails.Score / 2} />

                    <Divider />

                    {/* Anime description */}
                    <Space direction="vertical" size="middle" style={{ display: 'flex', height: '20vh', width: '90vh', overflow: 'auto' }}>
                      {/* <Card style={{height: '20vh', width: '80vh', overflow:'auto'}} bordered={false}> */}
                      {this.state.selectedAnimeDescription ? <div>
                        <p style={{ fontSize: 13 }}>{this.state.selectedAnimeDescription.synopsis}</p>
                      </div> : null}
                      {/* </Card> */}
                    </Space>

                    <Divider />

                    {/* Favorite and Completed Num of person */}
                    <Row gutter={16}>
                      <Col span={12}>
                        <Statistic title="Favorite" value={this.state.selectedAnimeDetails.Favorites} prefix={<LikeOutlined />} />
                      </Col>
                      <Col span={12}>
                        <Statistic title="Completed" value={this.state.selectedAnimeDetails.Completed} />
                      </Col>
                    </Row>

                    <Divider />

                    {/* Anime type */}
                    {this.state.selectedAnimeGenres ? <div>
                      <Row gutter={16}>
                        {this.state.selectedAnimeGenres.map((item, i) => (
                          <Tooltip key={i}>
                            <Tag>{item.genres}</Tag>
                          </Tooltip>
                        ))}
                      </Row>
                    </div> : null}

                  </Col>
                </Row>
              </CardBody>
            </Card>

          </div> : null}






          {this.state.userAlsoWatchDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

            <Divider><h4 style={{ fontSize: 20, fontFamily: 'arial' }}>People Also Watch</h4></Divider>

            <Row gutter='30' justify='center'>

              <Col span={4} style={{ textAlign: 'center', overflow: 'auto' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.userAlsoWatchDetails[0] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.userAlsoWatchDetails[0].url} referrerpolicy="no-referrer" alt={"Alsowatch1"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.userAlsoWatchDetails[0].Anime_ID }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.userAlsoWatchDetails[0].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.userAlsoWatchDetails[1] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.userAlsoWatchDetails[1].url} referrerpolicy="no-referrer" alt={"Alsowatch2"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.userAlsoWatchDetails[1].Anime_ID }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.userAlsoWatchDetails[1].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.userAlsoWatchDetails[2] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.userAlsoWatchDetails[2].url} referrerpolicy="no-referrer" alt={"Alsowatch3"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.userAlsoWatchDetails[2].Anime_ID }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.userAlsoWatchDetails[2].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.userAlsoWatchDetails[3] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.userAlsoWatchDetails[3].url} referrerpolicy="no-referrer" alt={"Alsowatch4"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.userAlsoWatchDetails[3].Anime_ID }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.userAlsoWatchDetails[3].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.userAlsoWatchDetails[4] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.userAlsoWatchDetails[4].url} referrerpolicy="no-referrer" alt={"Alsowatch5"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.userAlsoWatchDetails[4].Anime_ID }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.userAlsoWatchDetails[4].Name}
                </NavLink>
              </Col>
            </Row>


          </div> : null}





          {this.state.TopScoreAnimeInSameGenresDetails ? <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>

            <Divider><h4 style={{ fontSize: 20, fontFamily: 'arial' }}>Top Score Anime in Same Genres</h4></Divider>


            <Row gutter='30' justify='center'>


              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[0] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[0].url} referrerpolicy="no-referrer" alt={"Alsowatch1"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.TopScoreAnimeInSameGenresDetails[0].Anime_id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.TopScoreAnimeInSameGenresDetails[0].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[1] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[1].url} referrerpolicy="no-referrer" alt={"Alsowatch2"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.TopScoreAnimeInSameGenresDetails[1].Anime_id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.TopScoreAnimeInSameGenresDetails[1].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[2] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[2].url} referrerpolicy="no-referrer" alt={"Alsowatch3"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.TopScoreAnimeInSameGenresDetails[2].Anime_id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.TopScoreAnimeInSameGenresDetails[2].Name}
                </NavLink>
              </Col>


              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[3] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[3].url} referrerpolicy="no-referrer" alt={"Alsowatch4"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.TopScoreAnimeInSameGenresDetails[3].Anime_id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.TopScoreAnimeInSameGenresDetails[3].Name}
                </NavLink>
              </Col>

              <Col span={4} style={{ textAlign: 'center' }}>
                <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                  {!this.state.TopScoreAnimeInSameGenresDetails[4] ? (
                    <h5> No results found </h5>
                  ) : (
                    <img src={this.state.TopScoreAnimeInSameGenresDetails[4].url} referrerpolicy="no-referrer" alt={"Alsowatch5"} style={{ height: '25vh' }} />
                  )}
                </Card>
                <NavLink to={{ pathname: '/anime?id=' + this.state.TopScoreAnimeInSameGenresDetails[4].Anime_id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                  {this.state.TopScoreAnimeInSameGenresDetails[4].Name}
                </NavLink>
              </Col>
            </Row>


          </div> : null}

          <Divider />

        </div>
      </div>
    )
  }

}

export default AnimePage

