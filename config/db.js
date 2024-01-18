const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://zakir:zakir@cluster0.jc5w46u.mongodb.net/collectionstore';

const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports = { client, uri };
