import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import {getSearchResults} from '../fetcher';


class SearchPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedName: null,
            selectedGenre: null,
            selectedLicensor: null,
            selectedProducer: null,
            selectedStudio: null, 
            selectedScore: null
        }
    }
  
  componentDidMount() {

   getSearchResults().then(res =>{
        this.setState({ selectedName: res.results[0] })
        this.setState({ selectedGenre: res.results[1] })
        this.setState({ selectedLicensor: res.results[2] })
        this.setState({ selectedProducer: res.results[3] })
        this.setState({ selectedStudio: res.results[4] })
        this.setState({ selectedScore: res.results[5] })
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
                      <label>Select Genre</label>
                      <select class="form-control select1">
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
                $('.select1').select1();
            </script>

            <div class="container">
              <div class="row">
                  <form class="col-md-4">
                      <label>Select Licensor</label>
                      <select class="form-control select2">
                        <option>Bandai Entertainment</option> 
                        <option>Sony Pictures Entertainment</option> 
                        <option>VIZ Media</option> 
                        <option>Funimation</option> 
                        <option>Netflix</option> 
                      </select>
                  </form>
              </div>
            </div>
            <script>
                $('.select2').select2();
            </script>

            <div class="container">
              <div class="row">
                  <form class="col-md-4">
                      <label>Select Producer</label>
                      <select class="form-control select3">
                        <option>Bandai Visual</option> 
                        <option>TV Tokyo</option> 
                        <option>Fuji TV</option> 
                        <option>CBC</option> 
                        <option>Marvelous</option> 
                      </select>
                  </form>
              </div>
            </div>
            <script>
                $('.select3').select3();
            </script>

            <div class="container">
              <div class="row">
                  <form class="col-md-4">
                      <label>Select Studio</label>
                      <select class="form-control select4">
                        <option>Sunrise</option> 
                        <option>Gallop</option> 
                        <option>Toei Animation</option> 
                        <option>Nippon Animation</option> 
                        <option>AIC</option> 
                      </select>
                  </form>
              </div>
            </div>
            <script>
                $('.select4').select4();
            </script>

            <div class="container-xl">
                <div class="table-responsive">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-8"><h2>Search Results</h2></div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name <i class="fa fa-sort"></i></th>
                                    <th>Genre <i class="fa fa-sort"></i></th>
                                    <th>Type <i class="fa fa-sort"></i></th>
                                    <th>Producer <i class="fa fa-sort"></i></th>
                                    <th>Score <i class="fa fa-sort"></i></th>
                                    <th>Rating <i class="fa fa-sort"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>name</td>
                                    <td>genre A</td>
                                    <td>type A</td>
                                    <td>producer A</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>name</td>
                                    <td>genre A</td>
                                    <td>type A</td>
                                    <td>producer A</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>name</td>
                                    <td>genre A</td>
                                    <td>type A</td>
                                    <td>producer A</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>name</td>
                                    <td>genre A</td>
                                    <td>type A</td>
                                    <td>producer A</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>name</td>
                                    <td>genre A</td>
                                    <td>type A</td>
                                    <td>producer A</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>       
                            </tbody>
                        </table>
                        <div class="clearfix">
                            <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul class="pagination">
                                <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                <li class="page-item"><a href="#" class="page-link">1</a></li>
                                <li class="page-item"><a href="#" class="page-link">2</a></li>
                                <li class="page-item active"><a href="#" class="page-link">3</a></li>
                                <li class="page-item"><a href="#" class="page-link">4</a></li>
                                <li class="page-item"><a href="#" class="page-link">5</a></li>
                                <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>   





        </div>
    )
  }
}

export default SearchPage