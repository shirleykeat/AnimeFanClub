import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import {Form, Button} from 'react-bootstrap';
import {getTitle, getTopAnime, getTopManga} from '../fetcher';
import AnimeList from '../components/AnimeList';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
         topAnimes:[],
         topMangas:[],
         searchAnimes:null
    }

    this.titleInput = React.createRef();

  }
  
  componentDidMount() {

   getTopAnime().then(res =>{
      this.setState({topAnimes: res.results})
    })

   getTopManga().then(res => {
      this.setState({topMangas: res.results})
    })
     
  }

  getTitleSearch =(e)=>{

    e.preventDefault();

    var titleInput = this.titleInput.current.value;

    if (titleInput===""){
      this.setState({searchAnimes: null});
    } 
    else{
      getTitle(1,titleInput).then(res =>{
        this.setState({searchAnimes: res.results})
      })
    }

  }

  resetSearch =()=>{
    
    this.setState({searchAnimes: null});

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
            <Button variant="outline-success" type="submit" onClick={this.resetSearch}>Reset</Button>
          </Form>
        </div>

        
        {this.state.searchAnimes && this.state.searchAnimes.length !==0? 
          <div>
          <div class="text-center">
          <h4>Title Search Results</h4>
          </div>
          <div className='container-fluid' style={{overflow:"auto"}} >
              <AnimeList animes={this.state.searchAnimes}/>
          </div>
          </div>:
          <></>
         }
     

        <div class="text-center">
          <h4>Top Animes</h4>
        </div>
        <div className='container-fluid' style={{overflow:"auto"}} >
              <AnimeList animes={this.state.topAnimes}/>
        </div>
      
        <div class="text-center">
          <h4>Top Mangas</h4>
        </div>
        <div className='container-fluid'  style={{overflow:"auto"}}>
              <AnimeList animes={this.state.topMangas}/>
    
        </div>

      </div>
       
    )

  }



}

export default HomePage

