# Organizer-TS
## Make a list of movies you are interested in or have watched
## LINK DEPLOY: https://organizer-ts-v2.onrender.com


### POST: /movie
#### Body: ```{ "name": "Os Vingadores", "streaming": "netflix", "genre": "action" } ```
#### insert a movie


### GET: /movie
#### Return list of all movies


### DELETE: /movie/:movieId
#### Delete a movie


### POST: /ratings
#### Body: ```{ "userId": 2, "movieId": 2 , "rating": 4, "comment": "Great movie" } ```
#### insert or update a rating


### GET: /ratings/movie/:movieId
#### get a list of all ratings of that movie


### GET: /ratings/user/:userId
#### get a list of all ratings of that user


### POST: /user/
#### Body: ```{ "name": "Matheus" } ```
#### insert a user