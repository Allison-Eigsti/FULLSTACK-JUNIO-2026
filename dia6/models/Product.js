const mongoose = require('mongoose');

// Create new schema
const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: Number,
    quantity_left: Number
},
// Mongoose automatically adds two fields to every document: updatedAt, createdAt
{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


//For each product Mongo stores:
// {
//     _id: "65abc123...",
//     name: "Laptop",
//     price: 1200,
//     quantity_left: 5,
//     createdAt: "2026-07-08T10:30:00.000Z",
//     updatedAt: "2026-07-08T10:30:00.000Z"
// }