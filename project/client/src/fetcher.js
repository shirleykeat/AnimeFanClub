import config from './config.json'

const getAnime = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime?id=${id}`, {
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
        method: 'GET',
    })
    return res.json()
}

const getGenre = async(page, genre) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/genre?page=${page}&genre=${genre}`,
     {method:`GET`,
    })
    return res.json()
}

const getSource = async(page, source) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/source?page=${page}&source=${source}`,
     {method:`GET`,
    })
    return res.json()
}

const getType = async(page, type) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/type?page=${page}&type=${type}`,
     {method:`GET`,
    })
    return res.json()
}

const getRating = async(page, rating) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/type?page=${page}&rating=${rating}`,
     {method:`GET`,
    })
    return res.json()
}

const getTopAnime = async()=>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/topAnime`,
     {method:`GET`,
    })
    return res.json()
}

const getTopManga = async()=>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/topManga`,
     {method:`GET`,
    })
    return res.json()
}

const  getTitle= async(page,title) =>{
    var res = await fetch(`http://${config.server_host}:${config.server_post}/main/title?page=${page}&title=${title}`,
     {method:`GET`,
    })
    return res.json()
}


export {
    getAnime,
    anime_userAlsoWatch,
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