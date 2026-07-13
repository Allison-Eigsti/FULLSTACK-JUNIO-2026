const express = require('express')
const router = express.Router()
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controller/product-controllers.js');
const { model } = require('mongoose')
const Product = require('../models/Product.js')

//routes

router.get('/', getProducts);

router.get('/:id', getProductById);

router.post('/', addProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;