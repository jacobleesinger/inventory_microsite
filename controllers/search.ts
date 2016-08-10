import { Product } from '../models/product';

export const searchController = {
    registerRoutes: function(app) {
        app.get('/search', this.show);
        app.post('/search', this.create);
    },
    show: function(req, res, next) {
        res.render('search', {results: "results"});
    },
    create: function(req, res, next) {
        console.log(req.body);
        Product.find({name: req.body.name}, function(err, products) {
                    if(err) throw err;
                    res.send({redirect: '/products'});
            });

    }
};
