<a href="#"><img src=https://github.com/vineeshvk/chat-app-flutter/blob/master/assets/icon/logo.png width=80></a>

# GovApp Server

It's an Apollo Graphql Server created using typescript which uses postgres as it's database. and is deployed in google cloud platform using docker container.

## Client

### Flutter application

## Features

- signup and signin
- notification

## Tools used

- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](http://typeorm.io/#/)
- [Apollo Server(Graphql)](https://www.apollographql.com/docs/apollo-server/)
- [Postgres](https://www.npmjs.com/package/pg)
- [Docker](https://www.docker.com/)
- [GCP](https://www.console.google.com/)
- [Firebase Cloud Messaging](https://firebase.google.com)


## How to run

### Normal

you have to run your postgres server at PORT 5432 then

```
npm install
```

```
npm start
```

### With Docker

first install [docker](https://docs.docker.com/install/#supported-platforms) and [docker-compose](https://docs.docker.com/compose/install/#install-compose)

```
docker-compose up
```

in the project directory.
then open **http://localhost:3350** in your web browser
