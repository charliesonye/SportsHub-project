
## P4-Server

## Contents

* [Project Description](#project-Description)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)


## Project Description

This project allows football fans to create teams with players of their choosing like in fantasy sports.

## Features
* Full crud capabilities with competition data 
* Able to add players, reviews and teams to database

## Client Technologies
The technologies used within this app:
* React.js
* React-router-dom 5.2.0

## Client Setup
To run locally:
```
$ cd p4-project
$ npm install
$ npm start --prefix client
```


## Server Technologies
The technologies used within this app:
Ruby Gems: Bcrypt, Active Record, SQLite3, Rails, Thin

## Setup
To run locally:
```
$ cd p4-project
$ bundle install
$ bundle exec rails db:migrate
$ bundle exec rails db:seed
$ bundle exec rails server

```