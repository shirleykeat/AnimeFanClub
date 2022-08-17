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
    WHERE USER_ID = ${userid}`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

async function user_watched(req, res) {
    const userid = req.query.id
    connection.query(`SELECT anime.Anime_ID AS id, Name, url
    FROM animelist
    JOIN anime ON animelist.anime_id = anime.Anime_ID
    LEFT JOIN anime_url au ON animelist.anime_id = au.Anime_ID
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
    connection.query(`SELECT anime.Anime_ID AS id, Name, url
    FROM animelist
    JOIN anime ON animelist.anime_id = anime.Anime_ID
    LEFT JOIN anime_url au ON animelist.anime_id = au.Anime_ID
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
    connection.query(`SELECT anime.Anime_ID AS id, Name, url
    FROM animelist
    JOIN anime ON animelist.anime_id = anime.Anime_ID
    LEFT JOIN anime_url au ON animelist.anime_id = au.Anime_ID
    WHERE user_id = ${userid} AND animelist.score <> 0`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

async function get_password(req, res) {
    const email = req.query.email
    connection.query(`SELECT Password, USER_ID AS id
    FROM user
    WHERE Email_address = '${email}'`, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    })
}

// ********************************************
//             ANIME-SPECIFIC ROUTES
// ********************************************

async function anime_property(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `SELECT a.Anime_ID, a.Name, a.Score, a.English_name, a.Japanese_name, a.Type, a.Episodes, a.Aired, 
    a.Premiered, a.Source, a.Rating, a.Ranked, a.Popularity, a.Members, a.Favorites, a.Watching, a.Completed, a.On_Hold,
    a.Dropped, a.Plan_to_Watch, a.Score_10, a.Score_9, a.Score_8, a.Score_7, a.Score_6, a.Score_5, a.Score_4, a.Score_3,
    a.Score_2, a.Score_1, a.Duration, au.url
    FROM anime a LEFT JOIN anime_url au ON a.Anime_ID = au.Anime_ID
    WHERE a.Anime_ID = ${animeid}`;

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

async function anime_description(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `SELECT aws.synopsis
    FROM anime a LEFT JOIN anime_with_synopsis aws ON a.Anime_ID = aws.Anime_ID
    WHERE a.Anime_ID = ${animeid}`;

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


async function anime_genres(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `SELECT ag.genres
    FROM anime a LEFT JOIN anime_genres ag ON a.Anime_ID = ag.Anime_ID
    WHERE a.Anime_ID = ${animeid}`;

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

async function anime_userAlsoWatch(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `WITH temp AS (
        SELECT user_id
        FROM animelist
        WHERE Anime_id = ${animeid} AND watching_status IN (1,2)
    ),
        animeID AS (
        SELECT Anime_id
        FROM animelist AS a
        JOIN temp AS t ON a.user_id = t.user_id
        WHERE Anime_id <> ${animeid} AND watching_status IN (1,2)
        GROUP BY Anime_id
        ORDER BY count(*) DESC
        LIMIT 10
    )
    SELECT a.Anime_id, a.Name, au.url
    FROM anime a LEFT JOIN anime_url au ON a.Anime_ID = au.Anime_ID
    WHERE a.Anime_ID in (select Anime_id from animeID)
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



async function anime_TopinsameGenres(req, res) {
    const animeid = req.query.id ? req.query.id : 1;
    AnimeQuery = `
    WITH temp AS (
        SELECT DISTINCT Genres
        FROM anime_genres
        WHERE Anime_id = ${animeid}
    ),
        animeID AS (
        SELECT DISTINCT Anime_id
        FROM anime_genres
        WHERE Anime_id <> ${animeid} and Genres in (SELECT Genres FROM temp)
    ),
        animeID_list AS (
        SELECT Anime_id
        FROM animelist
        WHERE Anime_id <> ${animeid} and watching_status in (1, 2)
        GROUP BY Anime_id
        ORDER BY count(*) DESC
        LIMIT 100
    )
    SELECT a.Anime_id, a.Name, au.url
    FROM anime a LEFT JOIN anime_url au ON a.Anime_ID = au.Anime_ID
    WHERE a.Anime_id in (SELECT Anime_id FROM animeID) AND a.Anime_id in (SELECT Anime_id FROM animeID_list)
    group by a.Anime_id, a.Name
    ORDER BY a.Score desc
    LIMIT 20
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

// ********************************************
//             MAIN PAGE ROUTES
// ********************************************

async function get_genre(req, res) {
    const page = req.query.page ? req.query.page : 1
    const pagenumber = page - 1
    const genre = req.query.genre
    var query = `SELECT A.Anime_ID AS id, Name, Score, Source, Rating, Type, Episodes, url
    FROM anime A INNER JOIN anime_genres G ON G.Anime_ID = A.Anime_ID
    INNER JOIN anime_url U on A.Anime_ID = U.Anime_ID
    WHERE G.Genres = '${genre}'
    ORDER BY A.popularity
    LIMIT 50;`
    //LIMIT ${pagenumber * 20}, 20;`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

async function get_source(req, res) {
    const page = req.query.page ? req.query.page : 1
    const pagenumber = page - 1
    const source = req.query.source
    var query = `SELECT A.Anime_ID AS id, Name, Score, Source, Rating, Episodes, Type, url
    FROM anime A JOIN anime_url U ON U.Anime_ID = A.Anime_ID
    WHERE A.Source = '${source}'
    ORDER BY A.popularity
    LIMIT 50;`
    //LIMIT ${pagenumber * 20}, 20;`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });
}

async function get_type(req, res) {
    const page = req.query.page ? req.query.page : 1
    const pagenumber = page - 1
    const type = req.query.type

    var query = `SELECT A.Anime_ID AS id, Name, Score, Source, Rating, Episodes, Type, url
    FROM anime A JOIN anime_url U ON U.Anime_ID = A.Anime_ID
    WHERE A.Type = '${type}'
    ORDER BY A.popularity
    LIMIT 50;`
    //LIMIT ${pagenumber * 20}, 20;`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

async function get_rating(req, res) {
    const page = req.query.page ? req.query.page : 1
    const pagenumber = page - 1
    const rating = req.query.rating

    var query = `SELECT A.Anime_ID AS id, Name, Score, Source, Rating, Episodes, Type, url
    FROM anime A JOIN anime_url U ON U.Anime_ID = A.Anime_ID
    WHERE A.Rating LIKE '%${rating}%'
    ORDER BY A.popularity
    LIMIT 50;`
    //LIMIT ${pagenumber * 20}, 20;`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });

}

async function top_manga(req, res) {

    var query = `SELECT A.Anime_ID AS id, Name, Score, Episodes, url
    FROM anime A JOIN anime_url AU ON A.Anime_ID = AU.Anime_ID
    WHERE A.Source = 'Manga'
    ORDER BY Ranked
    LIMIT 10;`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });
}

async function top_anime(req, res) {

    var query = `SELECT A.Anime_ID AS id, Name, Score, Episodes, url
    FROM anime A JOIN anime_url AU ON A.Anime_ID = AU.Anime_ID
    WHERE A.Source <> 'Manga'
    ORDER BY Ranked
    LIMIT 10;`;

    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });
}

async function search_title(req, res) {
    const title = req.query.title

    var query = `SELECT A.Anime_ID AS id, A.Name AS Name, Score, Source, Rating, Episodes, Type, url
    FROM anime A JOIN anime_url U ON U.Anime_ID = A.Anime_ID
    Where A.Name LIKE '%${title}%'
    ORDER BY A.Popularity`;
    connection.query(query, function (error, results, fields) {

        if (error) {
            res.json({ error: error })
        } else if (results) {
            res.json({ results: results })
        }
    });
}


// ********************************************
//             SEARCH PAGE ROUTES
// ********************************************

async function get_search_results(req, res) {
    const genre = req.query.genre ? req.query.genre : '';
    const licensor = req.query.licensor ? req.query.licensor : '';
    const producer = req.query.producer ? req.query.producer : '';
    const studio = req.query.studio ? req.query.studio : '';
    const name = req.query.name ? req.query.name : '';
    const scoreH = req.query.scoreH ? req.query.scoreH : 10;
    const scoreL = req.query.scoreL ? req.query.scoreL : 0;
    SearchQuery = `WITH genre AS (
        SELECT Anime_ID, Genres
        FROM anime_genres
        WHERE Genres LIKE '%${genre}%'
        ),
    licensor AS (
        SELECT Anime_ID, Licensors
        FROM anime_licensors
        WHERE Licensors LIKE '%${licensor}%'
        ),
    producer AS (
        SELECT Anime_ID, Producers
        FROM anime_producers
        WHERE Producers LIKE '%${producer}%'
        ),
    studio AS (
        SELECT Anime_ID, Studios
        FROM anime_studios
        WHERE Studios LIKE '%${studio}%'
        )
    SELECT DISTINCT anime.anime_id AS id, anime.Name AS name, anime.Type AS type, anime.Score AS score, anime.Rating AS rating,
            anime.Ranked AS ranked, anime.Popularity AS popularity, anime.Favorites AS favorites
    FROM anime
    INNER JOIN genre ON anime.Anime_ID = genre.Anime_ID
    INNER JOIN licensor ON anime.Anime_ID = licensor.Anime_ID
    INNER JOIN producer ON anime.Anime_ID = producer.Anime_ID
    INNER JOIN studio ON anime.Anime_ID = studio.Anime_ID
    WHERE anime.Name LIKE '%${name}%' AND anime.Score >= ${scoreL} AND anime.Score <= ${scoreH}
    LIMIT 1000;
    `;

    connection.query(SearchQuery,
        function (error, results, fields) {
            if (error) {
                console.log(error)
                res.json({ error: error })
            } else if (results) {
                res.json({ results: results })
            }
        })
}



module.exports = {
    user_profile,
    user_watched,
    user_watching,
    user_rated,
    get_password,
    anime_property,
    anime_description,
    anime_genres,
    anime_userAlsoWatch,
    anime_TopinsameGenres,
    get_genre,
    get_type,
    get_rating,
    get_source,
    top_manga,
    top_anime,
    search_title,
    get_search_results
}
