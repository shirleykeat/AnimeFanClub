import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
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

       getGenre(this.state.page,this.state.type).then(res => {
        this.setState({genreAnimes: res.results})
      })

    }

   /* getGenreAnimes =async(ty) =>{

       const url = `http://127.0.0.1:8080/main/genre?page=${this.state.page}&genre=${ty}`
       const res = await fetch(url, {method:'GET',})
       const resJson = await res.json()
       this.setState({genreAnimes: resJson.results})
    }  */

    getGenreAnimes =(ty) =>{

        getGenre(this.state.page,ty).then(res => {
            this.setState({genreAnimes: res.results})
          })

    }

    
    getAnime = (animes) =>{
            
        return(
            animes.map((anime, index)=>(
                <Col>
                    <img src={anime.url} alt='anime'></img>
                </Col>
            ))
        );
    }
    
    render(){

        return(
        <div>

            <div> 
                <MenuBar/>
            </div>


            <div className='mx-auto p-2' style={{width: '800px'}}>
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getGenreAnimes("Action")}}>Action</Button>{' '}
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getGenreAnimes("Comedy")}}>Comedy</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Drama")}}>Drama</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Sci-Fi")}}>Sci-Fi</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Supernatural")}}>Supernatural</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Magic")}}>Magic</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Fantacy")}}>Fantacy</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Sports")}}>Sports</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getGenreAnimes("Romance")}}>Romance</Button>{' '}
            </div>
            
            {this.state.genreAnimes && this.state.genreAnimes.length !==0? 
            <div>
                <Container>
                    <Row>
                        {this.getAnime(this.state.genreAnimes)}
                    </Row>
                </Container>
            </div>:
            <></>
            }
        </div> 
        )
    }

}

export default GenresPage