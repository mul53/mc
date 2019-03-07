
MUSANGA LOGISTICS CHALLENGE
-----

Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Challenge](#Challenge)
    - [Server-side](#Server-side)
    - [Client-side](#client-side)


Prerequisites
-----
1. Knowledge of the Javascript (Node JS), Express JS and MongoDB and React JS or Angular JS.
2. knowledge on client - Server paradigm
3. Text editor  [Visual Code](https://code.visualstudio.com/) is highly recommended.

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/

# Change directory into client app and
cd client 

# Install NPM dependencies
yarn install

# Then simply start your app in development with nodemon
yarn start


# Change directory into client app and
cd server

# Install NPM dependencies
yarn install

# Then simply start your app in development with nodemon
yarn start
```

**Note:** For the server side we recommend you install [Nodemon](https://github.com/remy/nodemon).Nodemon watches for any changes in your  node.js app and automatically restarts the
server.




Challenge
---
### Server-side
Create an express JS server that stores information on artist and their albums. The server should have the following APIs.




| API                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
|/api/v1/artists/| return a list of all artists. |
|/api/v1/albums/| return a list of all albums|
|/api/v1/artists/search/[QUERY]| return a list of all artists fitting the query term |
|/api/v1/albums/search/[QUERY]| return a list of all albums|
|api/v1/album/create/|creates and stores an album in the mongodb database|
|api/v1/artist/create/|creates and stores an artist in the mongodb database|
|api/v1/album/delete/[ID]|deletes album in the mongodb database based on the id|
|api/v1/artist/delete/[ID]|deletes artist in the mongodb database based on the id (including their albums)|
|api/v1/album/update/[ID]|updates album in the mongodb database based on the id|
|api/v1/artist/updates/[ID]|updates artist in the mongodb database based on the id|

To test these APIs we recommend using [Insomnia](https://insomnia.rest/) or [Postman](https://www.getpostman.com/)

Client-Side
-----
In the client folder, create a react application that connects to the API Server.  The application should have the following:

1. A page showing all the artists.
2. A page showing all the albums by an artist.
3. A page showing all the songs in an album.
4. A page that allows the user  to search for an artist.
5. A page to manage artists and their albums. This page should allow one to delete and update each artist and album information.  

**Bonus**: For bonus points use the following libraries.

1. Bootstrap for styling

2. React-router for routing 

3. Redux for state management.


Goodluck and if you have any questions please reachout to using the following email:
