import React from "react";
import Card from 'react-bootstrap/Card';

const AnimeList = (props) =>{
    return (
        <>
        {props.animes.map((anime, index)=>(
        <div className='image-container d-flex justify-content-start m-3'>
            <Card>
            <Card.Img variant = "top" src={anime.url} alt='anime'/>
            <Card.Body>
                <Card.Link href={"../anime?id=" + anime.id}  >{anime.Name}</Card.Link>
            </Card.Body>
            </Card>
            </div>
            ))}
        </>
    );
};

export default AnimeList;