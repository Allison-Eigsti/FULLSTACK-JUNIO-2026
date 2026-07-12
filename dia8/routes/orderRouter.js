const express = require('express')
const router = express.Router()
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controller/order-controller.js')
const { model } = require('mongoose')
const Order = require('../models/Order.js')

// routes
router.get('/', getAllOrders)

router.get('/:id', getOrderById)

router.post('/', createOrder)

router.put('/:id', updateOrder)

router.delete('/:id', deleteOrder)

module.exports = router