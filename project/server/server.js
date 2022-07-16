const express = require('express');
const mysql = require('mysql');
var cors = require('cors')


const routes = require('./routes')
const config = require('./config.json')

const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));


app.get('/user/watched', routes.user_watched)
app.get('/user/watching', routes.user_watching)
app.get('/user/rated', routes.user_rated)
app.get('/user/profile', routes.user_profile)
app.get('/anime', routes.anime)
app.get('/anime/user_alsowatch', routes.user_AlsoWatch)



app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
