import * as mongoose from 'mongoose';
export interface IProduct extends mongoose.Document {
    name: string;
    brand: string;
    category: string;
    price: string;
}

let productSchema = new  mongoose.Schema({
    name: {type:String, required: true},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true}
});

productSchema.methods.getAll = function(cb) {
};

productSchema.methods.getById = function(cd, productId) {
    return Product.find({ productId: this._id })
};

export const Product = mongoose.model('Product', productSchema);
