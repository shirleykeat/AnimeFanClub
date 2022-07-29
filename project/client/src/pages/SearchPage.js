import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {getTitle, getTopAnime, getTopManga} from '../fetcher';
import AnimeList from '../components/AnimeList';





class SearchPage extends React.Component {

  constructor(props) {
    super(props)

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
                placeholder="Type keyword here"
                className="me-2"
                aria-label="Type keyword here"
                ref = {this.titleInput}
                />
                <Button variant="outline-success" type="submit" onClick={this.getTitleSearch}>Search</Button>
            </Form>
            </div>

            <div class="container">
              <div class="row">
                  <form class="col-md-4">
                      <label>Select genre</label>
                      <select class="form-control select2">
                        <option>Action</option> 
                        <option>Adventure</option> 
                        <option>Comedy</option> 
                        <option>Drama</option> 
                        <option>Sci-Fi</option> 
                      </select>
                  </form>
              </div>
            </div>
            <script>
                $('.select2').select2();
            </script>






        </div>
    )
  }
}

export default SearchPage