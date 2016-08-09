import * as express from 'express';
import * as path from 'path';
import './db';

const app = express();

app.get('/', function(req, res) {
    res.send("hello world");
});

const server = app.listen(8080);
