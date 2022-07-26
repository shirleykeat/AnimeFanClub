import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import {getGenre, getSource, getType, getRating} from '../fetcher';


class AnimeListPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {

            type: null,
            placeholder: null,
            AnimesGenre: [],
            AnimesSource:[],
            AnimesType: [],
            AnimesRating: []

        }
        
    }

    componentDidMount(){

        if(type == "genre" && placeholder !== null){
                    
            const genre = placeholder
            getGenre(genre).then(res=>{
                this.setState({AnimesGenre: res.results});
            })
        }

        if(type == "source" && placeholder !== null){
                            
            const source = placeholder
            getType(source).then(res=>{
                this.setState({AnimesSource: res.results});
            })
        }


        if(type == "type" && placeholder !== null){
                        
            const type = placeholder
            getType(type).then(res=>{
                this.setState({AnimesType: res.results});
            })
        }

        if(type == "rating" && placeholder !== null){
                        
            const rating = placeholder
            getType(rating).then(res=>{
                this.setState({AnimesRating: res.results});
            })
        }
    }

    render(){

    }


}


export default AnimeListPage