# CRUD with MongoDB, Mongoose, Node.js and Express.js

## 📑 Description

This is a simple CRUD with above mentioned technologies. It is based on [this Medium blog](https://rexben.medium.com/getting-started-with-mongodb-mongoose-2a6acbc34dd4).

## 📜 Pre-requisites

You need to have both [Git](https://git-scm.com/), [Node](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/try/download/community) installed.

Also, you need to have MongoDB running:

For Windows:

```shell
   cd C:\data
   mkdir db
   C:\mongodb\bin\mongod.exe
```

For Linux/Mac OS:

```shell
  sudo service mongodb start
```

## ▶️ Getting Started

First, clone the repository:

```shell
  git clone https://github.com/GenaroIBC/mongo-node-express-crud.git
```

Then, change to the project's directory and install dependencies:

```shell
  cd mongo-node-express-crud && npm install
```

Finally, run:

```shell
  npm run dev
```

🌐 Now, you can go to [localhost:4001](http://localhost:4001) with your browser to start playing.

👨‍💻️ You can use your favorite REST client, like [PostMan](https://www.postman.com/) or [Insomnia](https://insomnia.rest/download) or make the requests through a browser or by the command line.

## 🚀 Endpoints

_`GET`_ :

1. /students
1. /students/:id

_`POST`_ :

1. /students

_`PUT`_ :

1. /students/:id

_`DELETE`_ :

1. /students
1. /students/:id

## ⚙️ Stack of Technologies

1. [MongoDB](https://www.mongodb.com/)
2. [Mongoose](https://mongoosejs.com/)
3. [Node.js](https://nodejs.org/)
4. [Express.js](https://expressjs.com/)
