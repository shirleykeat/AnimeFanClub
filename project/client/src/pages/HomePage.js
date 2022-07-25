import React from 'react';
import {
  Table,
  Pagination,
  Select
} from 'antd'

import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {getTopAnime, getTopManga} from '../fetcher';
import AnimeList from '../components/AnimeList';
const { Option } = Select;


class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
         topAnimes:[],
         topMangas:[]
    }

  }

  componentDidMount() {

    getTopAnime().then(res =>{
      this.setState({topAnimes: res})
    })

    getTopManga().then(res => {
      this.setState({topMangas: res})
    })
 
  }


  render() {

    return (
      <div>
        <div>
          <MenuBar/>
        </div> 
        <div className='mx-auto p-4' style={{width:"800px"}}>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Title Search"
            />
            <Button variant="outline-success">Title Search</Button>
          </Form>
        </div>

        <div className='container-fluid movie-app'>
          <div className='row'>
              <AnimeList animes={this.state.topAnimes}/>
          </div>
        </div>

        <div className='container-fluid movie-app'>
          <div className='row'>
              <AnimeList animes={this.state.topMangas}/>
          </div>
        </div>

      </div>

    )

  }



}

export default HomePage

