import React from "react";
import { Card, CardBody } from "shards-react";
import { NavLink } from 'react-router-dom';
import {
    Row,
    Col
} from 'antd';

const AnimeList = (props) => {
    return (
        <>
            {props.animes.map((anime, index) => (
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
            ))}
        </>
    );
};

export default AnimeList;