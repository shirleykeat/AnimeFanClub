import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { Card} from "shards-react";
import {NavLink} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './HomePage.css';
import {getGenre} from '../fetcher';



class GenresPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            page:1,
            type:"Action",
            genreAnimes: []
        }
        
    }

   componentDidMount(){

       getGenre(this.state.page, this.state.type).then(res => {
        this.setState({genreAnimes: res.results})
      })
       
    }


    getGenreAnimes =(ty) =>{

        getGenre(this.state.page,ty).then(res => {
            this.setState({genreAnimes: res.results})
          })

    }

    
    getAnime = (animes) =>{
            
        return(
            animes.map((anime, index)=>(
                <div className='image-container d-flex justify-content-start m-3'>
                <Col>
                    <Card style={{ height: '25vh', width: '19vh', overflow: 'auto' }}>
                        
                    <img src={anime.url} referrerpolicy="no-referrer" alt={"animePic"} style={{ height: '25vh' }} />
                    </Card>
                    {/*<NavLink to={{ pathname: '/anime?id=' + anime.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                        {anime.Name}
            </NavLink>*/}
                    <a href={"../anime?id=" + anime.id} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                            {anime.Name}
                        </a>
                    
                </Col>
                </div>
            ))
        );
    }
    
    render(){

        return(
        <div>

            <div> 
                <MenuBar/>
            </div>


            <div className='mx-auto p-2' style={{width: '1000px'}}>
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getGenreAnimes("Action")}}>Action</Button>{' '}
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getGenreAnimes("Comedy")}}>Comedy</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Drama")}}>Drama</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Sci-Fi")}}>Sci-Fi</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Supernatural")}}>Supernatural</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Magic")}}>Magic</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Fantasy")}}>Fantasy</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Drama")}}>Drama</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Super Power")}}>Super Power</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Sports")}}>Sports</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Romance")}}>Romance</Button>{' '}
            </div>
            
            

            <Container>
                <Row md ={6}>
                    {this.getAnime(this.state.genreAnimes)}
                </Row>
                   
            </Container>
            
        </div> 
        )
    }

}

export default GenresPage