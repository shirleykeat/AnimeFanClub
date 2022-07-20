const express = require('express');
const mysql = require('mysql');
var cors = require('cors')


const routes = require('./routes')
const config = require('./config.json')

const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

// USER-SPECIFIC ROUTES
app.get('/user/watched', routes.user_watched)
app.get('/user/watching', routes.user_watching)
app.get('/user/rated', routes.user_rated)
app.get('/user/profile', routes.user_profile)

// ANIME-SPECIFIC ROUTES
app.get('/anime', routes.anime_property)
app.get('/anime/useralsowatch', routes.user_AlsoWatch)

// MAIN PAGE ROUTES
app.get('/main/get_genre', routes.get_genre)
app.get('/main/get_type', routes.get_type)
app.get('/main/get_rating', routes.get_rating)
app.get('/main/get_source', routes.get_source)
app.get('/main/top_manga',routes.top_manga)
app.get('/main/top_anime', routes.top_anime)
app.get('/main/search_title',routes.search_title)

// SEARCH PAGE ROUTES
app.get('/search/advance_search',routes.advance_search)

app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
