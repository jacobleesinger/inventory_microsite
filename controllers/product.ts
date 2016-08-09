import { Product } from '../models/product';

export const productController = {
    registerRoutes: function(app) {
        app.get('/products', this.show);
        app.post('/products', this.create);
    },

    show: function(req, res, next) {
        Product.find({}, function(err, products) {
            if(err) throw err;
            res.render('products', {products: products});
        });
    },

    create: function(req, res, next) {
        console.log(`about to create product: ${req.body.name}`);
        let newProduct = Product.create(req.body);

        res.send(`created: ${newProduct.name}`);
    }
}

