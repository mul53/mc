## MUSANGA  CHALLENGE

## Getting Started

### Set up MongoDB
Install MongoDB onto your computer, 
If you have installed mongodb and still seeing errors in the output. Try checking the db config in `server-side/services/db.js`

### Install Dependencies
Install the client-side dependencies, by running the following commands.

```
cd client
```

```
yarn
```

Install the server-side dependencies, by running the following commands.

```
cd server-side
```

```
yarn
```

### Start local development env
Start the backend server then the client


## Server-Side
In Server-Side Root directory

### Run Server-Side tests

```
yarn run app:test
```

### Run Server-Side linter

```
yarn run app:lint
```

### Run Server-Side App 

```
yarn run app:start
```

## Client-Side
In Client directory

### Run Client-Side linter

```
yarn run start:lint
```

### Run Client-Side App

```
yarn run start:dev
```