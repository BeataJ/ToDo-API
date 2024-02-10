const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
    const client = await MongoClient.connect('mongodb://10.0.0.16:27017');
    database = client.db('todo-api');
}

function getDb() {
    if(!database) {
        throw new Error('Database not connected!')
    }

    return database;
}

module.exports = {
    initDb:initDb,
    getDb:getDb
}