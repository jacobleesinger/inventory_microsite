import { Product } from '../models/product';

export const searchController = {
    registerRoutes: function(app) {
        app.get('/search', this.show);
        app.post('/search', this.create);
    },
    show: function(req, res, next) {
        res.render('search');
    },
    create: function(req, res, next) {
        console.log(req.body);
        res.send('success');
    }
};
