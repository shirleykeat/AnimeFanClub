import config from './config.json'

const getAnime = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const getAnimeGenres = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime/animegenres?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const getAnimeDescription = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime/description?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const anime_userAlsoWatch = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime/useralsowatch?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const anime_TopinsameGenres = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime/topinsameGenres?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}


const getUserProfile = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/user/profile?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const getUserWatched = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/user/watched?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const getUserWatching = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/user/watching?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}

const getUserRated = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/user/rated?id=${id}`, {
        method:'GET',
    })
    return res.json()
}

const getGenre = async(page, genre) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/genre?page=${page}&genre=${genre}`,{
        method:'GET',
    })
    return res.json()
}

const getSource = async(page, source) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/source?page=${page}&source=${source}`,{
        method:'GET',
    })
    return res.json()
}

const getType = async(page, type) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/type?page=${page}&type=${type}`,{
        method:'GET',
    })
    return res.json()
}

const getRating = async(page, rating) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/type?page=${page}&rating=${rating}`,{
        method:'GET',
    })
    return res.json()
}

const getTopAnime = async()=>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/topAnime`,{
        method:'GET',
    })
    return res.json()
}

const getTopManga = async()=>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/topManga`,{
        method:'GET',
    })
    return res.json()
}

const  getTitle= async(page,title) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_port}/main/title?title=${title}`,
     {method:'GET',
    })
    return res.json()
}


export {
    getAnime,
    getAnimeGenres,
    getAnimeDescription,
    anime_userAlsoWatch,
    anime_TopinsameGenres,
    getUserProfile,
    getUserWatched,
    getUserWatching,
    getUserRated,
    getGenre,
    getSource,
    getRating,
    getType,
    getTopAnime,
    getTopManga,
    getTitle
    
}