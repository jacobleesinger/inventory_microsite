import * as express from 'express';
import * as path from 'path';
import * as ExpressHandlebars from 'express-handlebars';
import * as bodyParser from 'body-parser';
import * as multer from 'multer';

import './db';
import './models';
import { productController } from './controllers/product';
import { searchController } from './controllers/search';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
    res.send("hello world");
});

productController.registerRoutes(app);
searchController.registerRoutes(app);

// set handlebars as view engine
const handlebars = ExpressHandlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const server = app.listen(8080);

