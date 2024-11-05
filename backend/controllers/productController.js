import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';


// @desc  Fetch all products.
// @route GET /api/products
// @acess Public
const getProducts = asyncHandler(async (req, res) => { 
    const products = await Product.find({});
    res.json(products);
});


// @desc  Fetch a single product.
// @route GET /api/products/:id
// @acess Public
const getProductById = asyncHandler(async (req, res) => { 
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        res.status(404);
        throw new Error('Uh oh.. Resource not Found');
    }
});

export { getProducts, getProductById };