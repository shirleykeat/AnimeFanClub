import config from './config.json'

const getAnime = async (id) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/anime?id=${id}`, {
        method: 'GET',
    })
    return res.json()
}



export {
    getAnime
}