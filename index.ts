import * as express from 'express';
import * as path from 'path';
import * as ExpressHandlebars from 'express-handlebars';
import * as bodyParser from 'body-parser';

import './db';
import './models';
import { productController } from './controllers/product';

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send("hello world");
});

productController.registerRoutes(app);

// set handlebars as view engine
const handlebars = ExpressHandlebars.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/search', function(req: express.Request, res: express.Response) {
    res.render('search');
});

const server = app.listen(8080);

