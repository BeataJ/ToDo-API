const express = require('express');

const db = require('./data/database');
const todosRouters = require('./routes/todos.routes');

const app = express();

app.use(express.json())

app.use('/todos', todosRouters);

app.use((error, req, res, next) => {
    res.status(500).json({
        message: 'Something went wrong!'
    });
})

db.initDb()
    .then(()=> {
    app.listen(3000);
    })
    .catch((error) => {
        console.log('Connection to the database failed!');
    })