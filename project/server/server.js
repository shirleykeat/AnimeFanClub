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
app.get('/anime/description', routes.anime_description)
app.get('/anime/animegenres', routes.anime_genres)
app.get('/anime/useralsowatch', routes.anime_userAlsoWatch)
app.get('/anime/topinsameGenres', routes.anime_TopinsameGenres)

// MAIN PAGE ROUTES
app.get('/main/genre', routes.get_genre)
app.get('/main/type', routes.get_type)
app.get('/main/rating', routes.get_rating)
app.get('/main/source', routes.get_source)
app.get('/main/topManga',routes.top_manga)
app.get('/main/topAnime', routes.top_anime)
app.get('/main/title',routes.search_title)

// SEARCH PAGE ROUTES
app.get('/search/advance_search',routes.get_search_results)

app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
