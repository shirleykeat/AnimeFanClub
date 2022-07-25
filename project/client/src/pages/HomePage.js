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
  topAnimesReq = async() =>{

    const url = "http://127.0.0.1:8080/main/topAnime"
    const res = await fetch(url);
    const resJson = await res.json()
    console.log(resJson)
    this.setState({topAnimes: resJson})
  };

  topMangasReq = async() =>{

    const url = "http://127.0.0.1:8080/main/topManga"
    const res = await fetch(url);
    const resJson = await res.json()
    console.log(resJson)
    this.setState({topMangas: resJson})
  };
 

  componentDidMount() {

   getTopAnime().then(res =>{
      this.setState({topAnimes: res})
    })

   getTopManga().then(res => {
      this.setState({topMangas: res})
    })
     
    //this.topAnimesReq();
    //this.topMangasReq();


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
              placeholder="Title Search"
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

