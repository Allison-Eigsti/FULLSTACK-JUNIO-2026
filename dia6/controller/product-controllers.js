const Product = require('../models/Product.js')

function getProducts(req, res) {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
}

function getProductById(req, res) {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(404).json({ message: "Could not find product" })
            }
            res.json(product);
        })
        .catch(err => res.status(500).json({ message: err.message }))
}


function addProduct(req, res) {
    const { name, price, quantity_left } = req.body;
    const newProduct = new Product({ name, price, quantity_left });
    newProduct.save()
        .then(product => res.status(201).json(product))
        .catch(err => res.status(400).json({ message: err.message }))
}

function updateProduct(req, res) {
    const { name, price, quantity_left } = req.body;
    Product.findByIdAndUpdate(
        req.params.id,
        { name, price, quantity_left },
        { new: true }
    )
        .then(updateProduct => {
            if (!updateProduct) {
                return res.status(404).json({ message: "Product not found"})
            }
            res.status(200).json(updateProduct);
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

function deleteProduct(req, res) {
    Product.findByIdAndDelete(req.params.id)
        .then(deletedProduct => {
            if (!deletedProduct) {
                return res.status(404).json({ message: "Product not found" })
            }
            res.json({ message: "Product deleted successfully "})
        })
        .catch(err => res.status(500).json({ message: err.message }));
}



module.exports = {
    getProducts,
    getProductById,
    addProduct, 
    updateProduct,
    deleteProduct
}