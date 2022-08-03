import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { Card} from "shards-react";
import {NavLink} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ListPage.css';
import {getType} from '../fetcher';
import Pagination from 'react-bootstrap/Pagination'



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
        this.setState({typeAnimes: res.results})
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


            <div className='mx-auto p-2' style={{width: '450px'}}>
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getTypeAnimes("TV")}}>TV</Button>{' '}
                <Button variant="outline-secondary" type="submit" size="sm" onClick={()=>{this.getTypeAnimes("Movie")}}>Movie</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getTypeAnimes("OVA")}}>OVA</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getTypeAnimes("Special")}}>Special</Button>{' '}
                <Button variant="outline-secondary" type="submit"size="sm" onClick={()=>{this.getTypeAnimes("ONA")}}>ONA</Button>{' '}
            </div>
            
            
            <Container>
                    <Row md ={6}>
                        {this.getAnime(this.state.typeAnimes)}
                    </Row>
            </Container>


            <div class="d-flex justify-content-center">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
          
    
        </div> 
        )
    }

}

export default TypesPage