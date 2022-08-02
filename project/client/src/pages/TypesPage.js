import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {getType} from '../fetcher';



class TypesPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
            page:1,
            type:"TV",
            typeAnimes: []
        }
        
    }

   componentDidMount(){

       getType(this.state.page, this.state.type).then(res => {
        this.setState({genreAnimes: res.results})
      })
       
    }


    getTypeAnimes =(ty) =>{

        getType(this.state.page,ty).then(res => {
            this.setState({typeAnimes: res.results})
          })

    }

    
    getAnime = (animes) =>{
            
        return(
            animes.map((anime, index)=>(
                <Col>
                    <Card>
                        <Card.Img variant = "top" src={anime.url} alt='anime'/>
                        <div class="text-center" style={{fontSize:"12px"}}>
                            <Card.Link href={"../anime?id=" + anime.id}  >{anime.Name}</Card.Link>
                        </div>
                    </Card>
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


            <div className='mx-auto p-2' style={{width: '450px'}}>
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getTypeAnimes("TV")}}>TV</Button>{' '}
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getTypeAnimes("Movie")}}>Movie</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getTypeAnimes("OVA")}}>OVA</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getTypeAnimes("Special")}}>Special</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getTypeAnimes("ONA")}}>ONA</Button>{' '}
            </div>
            
            
            <div>
                <Container>
                    <Row>
                        {this.getAnime(this.state.typeAnimes)}
                    </Row>
                </Container>
            </div>
        </div> 
        )
    }

}

export default TypesPage