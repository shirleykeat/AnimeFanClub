import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Card} from "shards-react";
import {NavLink} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './HomePage.css';
import {getSource} from '../fetcher';




class SourcePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            page:1,
            source:"Manga",
            sourceAnimes: []
        }
        
    }

   componentDidMount(){

       getSource(this.state.page, this.state.source).then(res => {
        this.setState({sourceAnimes: res.results})
      })
       
    }


    getSourceAnimes =(ty) =>{

        getSource(this.state.page,ty).then(res => {
            this.setState({sourceAnimes: res.results})
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


            <div className='mx-auto p-2' style={{width: '900px'}}>
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getSourceAnimes("Original")}}>Original</Button>{' '}
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getSourceAnimes("Manga")}}>Manga</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Light novel")}}>Light novel</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Visual novel")}}>Visual novel</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Game")}}>Game</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Picture book")}}>Picture book</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Book")}}>Book</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Music")}}>Music</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getSourceAnimes("Unknown")}}>Unknown</Button>{' '}
            </div>
            
            

            <Container>
                <Row md ={6}>
                    {this.getAnime(this.state.sourceAnimes)}
                </Row>
                   
            </Container>
  
        </div> 
        )
    }

}

export default SourcePage