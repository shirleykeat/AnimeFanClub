import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import {getTitle, getTopAnime, getTopManga} from '../fetcher';
import AnimeList from '../components/AnimeList';



class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
         topAnimes:[],
         topMangas:[],
         searchAnimes:null
    }

    this.titleInput = React.createRef();

  }
  /*topAnimesReq = async() =>{

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
  };*/
 

  componentDidMount() {

   getTopAnime().then(res =>{
      this.setState({topAnimes: res.results})
    })

   getTopManga().then(res => {
      this.setState({topMangas: res.results})
    })
     
    //this.topAnimesReq();
    //this.topMangasReq();
    

  }

  getTitleSearch =(e)=>{

    e.preventDefault();

    var titleInput = this.titleInput.current.value;
    getTitle(1,titleInput).then(res =>{
      this.setState({searchAnimes: res.results})
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
              placeholder="Title Search"
              className="me-2"
              aria-label="Title Search"
              ref = {this.titleInput}
            />
            <Button variant="outline-success" type="submit" onClick={this.getTitleSearch}>Search</Button>
          </Form>
        </div>
      
      <Container>
        {this.searchAnimes?
        <div className='container-fluid movie-app'>
          <p>Search result</p>
          <div className='row'>
              <AnimeList animes={this.state.searchAnimes}/>
          </div>
        </div>:
        <></>
        }
      </Container>
      
      <Container>
        <div className='container-fluid movie-app'>
          <p>Top Animes</p>
          <div className='row'>
              <AnimeList animes={this.state.topAnimes}/>
          </div>
        </div>
      </Container>
      <Container>
        <div className='container-fluid movie-app'>
          <p>Top Mangas</p>
          <div className='row'>
              <AnimeList animes={this.state.topMangas}/>
          </div>
        </div>
      </Container>
      </div>
       
    )

  }



}

export default HomePage

