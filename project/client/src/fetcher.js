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

export {
    getAnime,
    anime_userAlsoWatch
}