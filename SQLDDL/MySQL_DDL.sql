CREATE DATABASE ANIMATION;

USE ANIMATION;

CREATE TABLE anime (MAL_ID int, PRIMARY KEY(MAL_ID), Name varchar(255), Score int, Genres varchar(255),
English_name varchar(255), Japanese_name varchar(255), Type varchar(255), Episodes int, Aired varchar(255),
Premiered varchar(255), Producers varchar(255), Licensors varchar(255), Studios varchar(255), Source varchar(255),
Duration varchar(255), Rating varchar(255), Ranked int, Popularity int, Members int, Favorites int, Watching int,
Completed int, On_Hold int, Dropped int, Plan_to_Watch int, Score_9 int, Score_8 int, Score_7 int, Score_6 int,
Score_5 int, Score_4 int, Score_3 int, Score_2 int, Score_1 int);

CREATE TABLE anime_with_synopsis(MAL_ID int, PRIMARY KEY(MAL_ID), Name varchar(255), Score int, Genres varchar(255),
sypnopsis varchar(1000), FOREIGN KEY (MAL_ID) REFERENCES anime(MAL_ID));

CREATE TABLE animelist (user_id int,PRIMARY KEY (user_id, anime_id), anime_id int, rating int, watching_status int,
watched_episodes int, FOREIGN KEY (anime_id) REFERENCES anime(MAL_ID));

CREATE TABLE rating_complete (user_id int, anime_id int, rating int,FOREIGN KEY (user_id) REFERENCES animelist(user_id),
FOREIGN KEY (anime_id) REFERENCES anime(MAL_ID));


