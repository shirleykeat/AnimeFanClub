import React from "react";

const AnimeList = (props) =>{
    return (
        <>
        {props.animes.map((anime, index)=>
        <div>
            <img src={anime.url} alt='movie'></img>
            </div>)}
        </>
    );
};

export default AnimeList;