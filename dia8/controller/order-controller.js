const Order = require('../models/Order.js')
const Product = require('../models/Product.js')
const User = require('../models/User.js')

async function getAllOrders(req, res) {
    try {
        const orders = await Order.find()
        return res.json(orders)

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

async function getOrderById(req, res) {
    try {
        const order = await Order.findById(req.params.id)

        if (!order) {
            return res.status(404).json({ message: "Order does not exist" })
        }

        return res.json(order)

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

async function createOrder(req, res) {
    try {
        const { user, products } = req.body

        let total = 0;
        const orderProducts = []

        for (const item of products) {
            const product = await Product.findById(item.product)

            if (!product) {
                return res.status(404).json({ message: "Product not found" })
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({
                    message: `Not enough stock for ${product.name}`
                })
            }

            // Calculate price
            total += product.price * item.quantity

            // Reduce stock
            product.stock -= item.quantity;
            await product.save()

            orderProducts.push({
                product: product._id,
                quantity: item.quantity
            })
        }

        const order = new Order({
            user,
            products: orderProducts,
            total
        })

        await order.save()

        res.status(201).json(order)

    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

async function updateOrder(req, res) {
    try {
        const order = await Order.findById(req.params.id) 

        if (!order) {
            return res.status(404).json({ message: "Order not found" })
        }

        if (req.body.status !== undefined) {
            order.status = req.body.status
        }

        if (req.body.status !== undefined) {
            order.status = req.body.status
        }

        await order.save()

        res.json(order)

    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

async function deleteOrder(req, res) {
    try {
        const deleteOrder = await Order.findByIdAndDelete(req.params.id) 

        if (!deleteOrder) {
                return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json({ message: "Order deleted successfully"})
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}