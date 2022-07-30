import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap';
import {getGenre, getSource, getType, getRating} from '../fetcher';


class AnimeListPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            type: this.props.location.state.type,
            placeholder: this.props.location.state.placeholder,
            Animes: [],
           

        }
        
    }

    componentDidMount(){

        if(this.state.type == "genre" ){
                    
            const genre = this.state.placeholder
            getGenre(1,genre).then(res=>{
                this.setState({Animes: res.results});
            })
        }

        if(this.state.type == "source"){
                            
            const source = this.state.placeholder
            getSource(1,source).then(res=>{
                this.setState({Animes: res.results});
            })
        }


        if(this.state.type == "type"){
                        
            const type = this.state.placeholder
            getType(1,type).then(res=>{
                this.setState({Animes: res.results});
            })
        }

        if(this.state.type == "rating"){
                        
            const rating = this.state.placeholder
            getRating(1,rating).then(res=>{
                this.setState({Animes: res.results});
            })
        }
    }

    getAnime = (anime, index) =>{
            
        return(
              <Col key ={index}>
                <img src={anime.url} alt='anime'></img>
              </Col>
        );
    }
    
    render(){

        return(
        <div>
            <div> 
                <MenuBar/>
            </div>
            <div>
                <Container>
                    <Row>
                        {this.state.Animes.map(this.getAnime)}
                    </Row>
                </Container>
            </div>
        </div> 
        )
    }


}

export default AnimeListPage