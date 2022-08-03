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
import {getRating} from '../fetcher';




class RatingsPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            page:1,
            rating:"PG-13",
            ratingsAnimes: []
        }
        
    }

   componentDidMount(){

       getRating(this.state.page, this.state.rating).then(res => {
        this.setState({ratingsAnimes: res.results})
      })
       
    }


    getRatingsAnimes =(ty) =>{

        getRating(this.state.page,ty).then(res => {
            this.setState({ratingsAnimes: res.results})
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
                    <NavLink to={{ pathname: '/anime?id=' + anime.id }} style={{ textDecoration: 'none', color: 'brown', fontWeight: 'bold', fontSize: 13 }}>
                                        {anime.Name}
                     </NavLink>
                    
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


            <div className='mx-auto p-2' style={{width: '600px'}}>
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getRatingsAnimes("G - All Ages")}}>G-All Ages</Button>{' '}
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getRatingsAnimes("PG - Children")}}>PG-Children</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getRatingsAnimes("PG-13")}}>PG-13</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getRatingsAnimes("R - 17+ (violence & profanity)")}}>R-17+</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getRatingsAnimes("R+ - Mild Nudity")}}>R+</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getRatingsAnimes("Rx - Hentai")}}>Rx</Button>{' '}
            </div>
            
            

            <Container>
                <Row md ={6}>
                    {this.getAnime(this.state.ratingsAnimes)}
                </Row>
                   
            </Container>
            
        </div> 
        )
    }

}

export default RatingsPage