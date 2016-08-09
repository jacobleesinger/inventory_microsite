import * as express from 'express';
import * as path from 'path';

const app = express();

app.get('/', function(req, res) {
    res.send("hello world");
});

const server = app.listen(8080);

import { MongoClient } from 'mongodb';
import * as assert from 'assert';

const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});
