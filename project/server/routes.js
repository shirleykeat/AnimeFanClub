const config = require('./config.json')
const mysql = require('mysql');
const e = require('express');

// TODO: fill in your connection details here
const connection = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    port: config.rds_port,
    database: config.rds_db
});
connection.connect();

// ********************************************
//             USER-SPECIFIC ROUTES
// ********************************************
async function user_profile(req, res) {
    const userid = req.query.id
    connection.query(`SELECT USER_ID, Name, Birthday, Email_address
    FROM user
    WHERE user_id = ${userid}`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

async function user_watched(req, res) {
    const userid = req.query.id
    connection.query(`SELECT Name
    FROM animelist
    JOIN anime ON animelist.anime_id = anime.Anime_ID
    WHERE user_id = ${userid} AND watching_status = 2`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

async function user_watching(req, res) {
    const userid = req.query.id
    connection.query(`SELECT Name
    FROM animelist
    JOIN anime ON animelist.anime_id = anime.Anime_ID
    WHERE user_id = ${userid} AND watching_status = 1`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

async function user_rated(req, res) {
    const userid = req.query.id
    connection.query(`SELECT Name
    FROM animelist
    JOIN anime ON animelist.anime_id = anime.Anime_ID
    WHERE user_id = ${userid} AND score <> 0`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

async function anime(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `SELECT Anime_ID, Name, Score, English_name, Japanese_name, Type, Episodes, Aired, 
    Premiered, Source, Rating, Ranked, Popularity, Members, Favorites, Watching, Completed, On_Hold,
    Dropped, Plan_to_Watch, Score_10, Score_9, Score_8, Score_7, Score_6, Score_5, Score_4, Score_3,
    Score_2, Score_1, Duration 
    FROM anime LEFT JOIN 
    WHERE Anime_ID = ${animeid}`;

    if (animeid === null) {
        res.json({ results: [] })
    } else {
        connection.query(AnimeQuery,
            function (error, results, fields) {

                if (error) {
                    console.log(error)
                    res.json({ error: error })
                } else if (results) {
                    res.json({ results: results })
                }
            })
    }


}

async function user_AlsoWatch(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `WITH temp AS (
        SELECT user_id
        FROM animelist
        WHERE Anime_id = ${animeid} AND watching_status IN (1,2)
    )
    SELECT Anime_id
    FROM animelist AS a
    JOIN temp AS t ON a.user_id = t.user_id
    WHERE Anime_id <> ${animeid} AND watching_status IN (1,2)
    GROUP BY Anime_id
    ORDER BY count(*) DESC
    LIMIT 10
    `;

    if (animeid === null) {
        res.json({ results: [] })
    } else {
        connection.query(AnimeQuery,
            function (error, results, fields) {

                if (error) {
                    console.log(error)
                    res.json({ error: error })
                } else if (results) {
                    res.json({ results: results })
                }
            })
    }


}




module.exports = {
    user_profile,
    user_watched,
    user_watching,
    user_rated,
    anime,
    user_AlsoWatch
}