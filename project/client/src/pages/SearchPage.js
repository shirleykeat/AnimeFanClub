import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormInput, FormGroup, Button} from "shards-react";
import {format} from 'd3-format';
import {getSearchResults} from '../fetcher';

import {
    Table,
    Pagination,
    Select,
    Row,
    Col,
    Divider,
    Slider,
    Rate 
} from 'antd'

const wideFormat = format('.3r');

const animeColumns = [
    {   title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        sorter: (a, b) => a.Name.localeCompare(b.Name),
    },
    {   title: 'Genre',
        dataIndex: 'Genre',
        key: 'Genre',
        sorter: (a, b) => a.Genre.localeCompare(b.Genre)
    },
    {   title: 'Licensor',
        dataIndex: 'Licensor',
        key: 'Licensor',
        sorter: (a, b) => a.Licensor.localeCompare(b.Licensor)
    },
    {   title: 'Producer',
        dataIndex: 'Producer',
        key: 'Producer',
        sorter: (a, b) => a.Producer.localeCompare(b.Producer)
    },
    {   title: 'Studio',
        dataIndex: 'Studio',
        key: 'Studio',
        sorter: (a, b) => a.Studio.localeCompare(b.Studio)
    },
    {   title: 'Type',
        dataIndex: 'Type',
        key: 'Type',
        sorter: (a, b) => a.Type.localeCompare(b.Type)
    },    
    {   title: 'Rating',
        dataIndex: 'Rating',
        key: 'Rating',
        sorter: (a, b) => a.Rating.localeCompare(b.Rating)
    },
    {   title: 'Score',
        dataIndex: 'Score',
        key: 'Score',
        sorter: (a, b) => a.Score - b.Score
    },
    {   title: 'Ranked',
        dataIndex: 'Ranked',
        key: 'Ranked',
        sorter: (a, b) => a.Ranked - b.Ranked
    },    
    {   title: 'Popularity',
        dataIndex: 'Popularity',
        key: 'Popularity',
        sorter: (a, b) => a.Popularity - b.Popularity
    },    
    {   title: 'Favorites',
        dataIndex: 'Favorites',
        key: 'Favorites',
        sorter: (a, b) => a.Favorites - b.Favorites
    },    
    {   title: 'Synopsis',
        dataIndex: 'Synopsis',
        key: 'Synopsis',
    }
];


class SearchPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameQuery: '',
            genreQuery: '',
            licensorQuery: '',
            producerQuery: '',
            studioQuery: '',
            scoreHighQuery: 10,
            scoreLowQuery: 0,
            playersResults: []
        }

        this.updateSearchResults = this.updateSearchResults.bind(this)
        this.handleNameQueryChange = this.handleNameQueryChange.bind(this)
        this.handleGenreQueryChange = this.handleGenreQueryChange.bind(this)
        this.handleLicensorQueryChange = this.handleLicensorQueryChange.bind(this)
        this.handleProducerChange = this.handleProducerQueryChange.bind(this)
        this.handleStudioChange = this.handleStudioQueryChange.bind(this)
        // this.handleScoreChange = this.handleScoreChange.bind(this)
    }

    handleNameQueryChange(event) {
        this.setState({ nameQuery: event.target.value })
    }

    handleGenreQueryChange(event) {
        this.setState({ genreQuery: event.target.value })
    }

    handleLicensorQueryChange(event) {
        this.setState({ licensoryQuery: event.target.value })
    }

    handleProducerQueryChange(event) {
        this.setState({ producerQuery: event.target.value })
    }

    handleStudioQueryChange(event) {
        this.setState({ studioQuery: event.target.value })
    }

    // handleScoreChange(value) {
    //     this.setState({ scoreLowQuery: value[0] })
    //     this.setState({ scoreHighQuery: value[1] })
    // }

    updateSearchResults() {
        getSearchResults(this.state.nameQuery, this.state.genreQuery, this.state.licensorQuery, 
                        this.state.producerQuery, this.state.studioQuery, 
                        // this.state.scoreHighQuery, this.state.scoreLowQuery, 
                        null, null).then(res => {
            this.setState({ animeResults: res.results })
        })
    }

    componentDidMount() {
        getSearchResults(this.state.nameQuery, this.state.genreQuery, this.state.licensorQuery, 
                        this.state.producerQuery, this.state.studioQuery, 
                        // this.state.scoreHighQuery, this.state.scoreLowQuery, 
                        null, null).then(res => {
            this.setState({ animeResults: res.results })
        })
    }

    render() {
        return (
            <div>
                <MenuBar />
                <Form style={{ width: '80vw', margin: '0 auto', marginTop: '5vh' }}>
                    <Row>
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Name</label>
                            <FormInput placeholder="Name" value={this.state.nameQuery} onChange={this.handleNameQueryChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '40vw', margin: '0 auto' }}>
                            <label>Synopsis</label>
                            <FormInput placeholder="Synopsis" value={this.state.synopsisQuery} onChange={this.handleSynopsisQueryChange} />
                        </FormGroup></Col>  
                    </Row>
                    <br></br>
                    <Row>
                        <Col flex={2}><FormGroup style={{ width: '15vw', margin: '0 auto' }}>
                            <label>Genre</label>
                            <FormInput placeholder="Genre" value={this.state.genreQuery} onChange={this.handleGenreQueryChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '15vw', margin: '0 auto' }}>
                            <label>Licensor</label>
                            <FormInput placeholder="Licensor" value={this.state.licensorQuery} onChange={this.handleLicensorQueryChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '15vw', margin: '0 auto' }}>
                            <label>Producer</label>
                            <FormInput placeholder="Producer" value={this.state.producerQuery} onChange={this.handleProducerQueryChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '15vw', margin: '0 auto' }}>
                            <label>Studio</label>
                            <FormInput placeholder="Studio" value={this.state.studioQuery} onChange={this.handleStudioQueryChange} />
                        </FormGroup></Col>                    
                    </Row>
                    <br></br>
                    <Row>
                        <Col flex={2}><FormGroup style={{ width: '20vw', margin: '0 auto' }}>
                            <label>Score</label>
                            <Slider range defaultValue={[0, 10]} onChange={this.handleScoreChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '10vw' }}>
                            <Button style={{ marginTop: '4vh' }} onClick={this.updateSearchResults}>Search</Button>
                        </FormGroup></Col>
                    </Row>

                </Form>
                <Divider />
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
                <h3>Animes</h3>
                <Table dataSource={this.state.animeResults} columns={animeColumns} pagination={{ pageSizeOptions:[5, 10], defaultPageSize: 5, showQuickJumper:true }}/>
                </div>
            </div>
        )
    }
}

export default SearchPage



