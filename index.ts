import * as express from 'express';
import * as path from 'path';
import * as ExpressHandlebars from 'express-handlebars';
import './db';
import './models';

const app = express();

app.get('/', function(req, res) {
    res.send("hello world");
});

// set handlebars as view engine
const handlebars = ExpressHandlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/search', function(req, res) {
    res.render('search');
});

const server = app.listen(8080);

