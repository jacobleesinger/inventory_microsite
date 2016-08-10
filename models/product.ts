import * as mongoose from 'mongoose';
export interface IProduct extends mongoose.Document {
    name: string;
    brand: string;
    category: string;
    price: number;
}

let productSchema = new  mongoose.Schema({
    name: {type:String, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true}
});

productSchema.methods.getAll = function(cb) {
    return Product.find({}, cb);
};

productSchema.methods.getById = function(productId, cb) {
    return Product.find({ productId: this._id }, cb);
};

productSchema.methods.getByName = function(name, cb) {
    return Product.find({ name: this.name }, cb);
};

productSchema.methods.create = function(product: IProduct) {
    let newProduct = new Product(product);
    newProduct.save(function(err) {
        if(err) {
            console.log(`error: ${err}`);
        }
        console.log('saved!')
    });
};

export const Product = mongoose.model('Product', productSchema);
