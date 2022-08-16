import React from 'react';
import MenuBar from '../components/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormInput, FormGroup, Button } from "shards-react";
import { format } from 'd3-format';
import { getSearchResults } from '../fetcher';
import { Link } from 'react-router-dom'; 

import {
    Table,
    Row,
    Col,
    Divider,
    Slider
} from 'antd'

const wideFormat = format('.3r');

const animeColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        cell: row =><a href={"../anime?id=" + this.state.animeResults.id}> </a>,
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        sorter: (a, b) => a.type.localeCompare(b.type)
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        sorter: (a, b) => a.rating.localeCompare(b.rating)
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
        sorter: (a, b) => a.score - b.score
    },
    {
        title: 'Ranked',
        dataIndex: 'ranked',
        key: 'ranked',
        sorter: (a, b) => a.ranked - b.ranked
    },
    {
        title: 'Popularity',
        dataIndex: 'popularity',
        key: 'popularity',
        sorter: (a, b) => a.popularity - b.popularity
    },
    {
        title: 'Favorites',
        dataIndex: 'favorites',
        key: 'favorites',
        sorter: (a, b) => a.favorites - b.favorites
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
            animeResults: []

        }

        this.updateSearchResults = this.updateSearchResults.bind(this)
        this.handleNameQueryChange = this.handleNameQueryChange.bind(this)
        this.handleGenreQueryChange = this.handleGenreQueryChange.bind(this)
        this.handleLicensorQueryChange = this.handleLicensorQueryChange.bind(this)
        this.handleProducerQueryChange = this.handleProducerQueryChange.bind(this)
        this.handleStudioQueryChange = this.handleStudioQueryChange.bind(this)
        this.handleScoreChange = this.handleScoreChange.bind(this)
    }

    handleNameQueryChange(event) {
        this.setState({ nameQuery: event.target.value })
    }

    handleGenreQueryChange(event) {
        this.setState({ genreQuery: event.target.value })
    }

    handleLicensorQueryChange(event) {
        this.setState({ licensorQuery: event.target.value })
    }

    handleProducerQueryChange(event) {
        this.setState({ producerQuery: event.target.value })
    }

    handleStudioQueryChange(event) {
        this.setState({ studioQuery: event.target.value })
    }

    handleScoreChange(value) {
        this.setState({ scoreLowQuery: value[0] })
        this.setState({ scoreHighQuery: value[1] })
    }

    updateSearchResults() {
        getSearchResults(this.state.genreQuery, this.state.licensorQuery,
            this.state.producerQuery, this.state.studioQuery, this.state.nameQuery,
            this.state.scoreHighQuery, this.state.scoreLowQuery, 
        ).then(res => {
            this.setState({ animeResults: res.results })
        })
    }

    componentDidMount() {
        getSearchResults(this.state.genreQuery, this.state.licensorQuery,
            this.state.producerQuery, this.state.studioQuery, this.state.nameQuery,
            this.state.scoreHighQuery, this.state.scoreLowQuery, 
        ).then(res => {
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
                            <Slider range defaultValue={[0, 10]}  max={10} onChange={this.handleScoreChange} />
                        </FormGroup></Col>
                        <Col flex={2}><FormGroup style={{ width: '10vw' }}>
                            <Button style={{ marginTop: '4vh' }} onClick={this.updateSearchResults}>Search</Button>
                        </FormGroup></Col>
                    </Row>

                </Form>
                <Divider />
                <div style={{ width: '70vw', margin: '0 auto', marginTop: '2vh' }}>
                    <h3>Animes</h3>
                    <Table dataSource={this.state.animeResults} columns={animeColumns} pagination={{ pageSizeOptions: [5, 10], defaultPageSize: 5, showQuickJumper: true }} />
                </div>
            </div>
        )
    }
}

export default SearchPage



