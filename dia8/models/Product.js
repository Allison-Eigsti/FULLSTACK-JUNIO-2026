const mongoose = require('mongoose')

// Create product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: String,
    price: {
        type: Number,
        min: 0
    },
    stock: { 
        type: Number, 
        required: true, 
        min: 0, 
        validate: {
            validator: Number.isInteger,
            message: 'Stock must be an integer.'
        }
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;