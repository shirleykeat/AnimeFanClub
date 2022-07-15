CREATE DATABASE ANIMATION;

USE ANIMATION;

CREATE TABLE anime (Anime_ID int, PRIMARY KEY(Anime_ID), Name varchar(255), Score int, English_name varchar(255), Japanese_name varchar(255), Type varchar(255), Episodes int, Aired varchar(255),
Premiered varchar(255),  Source varchar(255), Rating varchar(255), Ranked int, Popularity int, Members int, Favorites int, Watching int,
Completed int, On_Hold int, Dropped int, Plan_to_Watch int, Score_10 int, Score_9 int, Score_8 int, Score_7 int, Score_6 int,
Score_5 int, Score_4 int, Score_3 int, Score_2 int, Score_1 int, Duration int);

CREATE TABLE anime_with_synopsis(Anime_ID int, PRIMARY KEY(Anime_ID), Name varchar(255), Score int, synopsis varchar(1000), FOREIGN KEY (Anime_ID) REFERENCES anime(Anime_ID));

CREATE TABLE anime_genres (Anime_ID int, Genres varchar(255), PRIMARY KEY (Anime_ID,Genres), FOREIGN KEY(Anime_ID) REFERENCES anime(Anime_ID));

CREATE TABLE anime_licensors(Anime_ID int,Licensors varchar(255),PRIMARY KEY (Anime_ID, Licensors),FOREIGN KEY (Anime_ID) REFERENCES anime(Anime_ID));

CREATE TABLE anime_producers(Anime_ID int, Producers varchar(255),PRIMARY KEY (Anime_ID,Producers), FOREIGN KEY(Anime_ID) REFERENCES anime(Anime_ID));

CREATE TABLE anime_studios(Anime_ID int,Studios varchar(255),PRIMARY KEY (Anime_ID, Studios),FOREIGN KEY (Anime_ID) REFERENCES anime(Anime_ID));

CREATE TABLE user(USER_ID int, PRIMARY KEY (USER_ID), Email_address int, Name varchar(255), Password varchar(255), Birthday varchar(255), Last_login varchar(255));

CREATE TABLE watching_status(status int ,PRIMARY KEY (status), description varchar(255));

CREATE TABLE animelist (user_id int,PRIMARY KEY (user_id, anime_id), anime_id int, score int, watching_status int,
watched_episodes int, FOREIGN KEY (anime_id) REFERENCES anime(Anime_ID), FOREIGN KEY (watching_status) REFERENCES watching_status(status));

#CREATE TABLE rating_complete (user_id int, anime_id int, rating int,FOREIGN KEY (user_id) REFERENCES animelist(user_id),
#FOREIGN KEY (anime_id) REFERENCES anime(Anime_ID));




