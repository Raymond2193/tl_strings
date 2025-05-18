const express = require('express')
const Order = require('../models/ordering')
const router = express.Router()

// Get orders
router.get('/', (req, res) => {
    res.json({mssg:'Get all orders'})
})


//Get single order
router.get('/:id', (req, res) => {
    res.json({mssg:'Get single order'})
})

// POST a new wokrout

router.post('/', async (req, res) => {
    const {first_name, last_name, email, stringer_name, racket_model,
        string_type, tension_v, tension_h, pickup_date, pickup_time, pickup_place,
        note} = req.body
    try {
        const order = await Order.create({first_name, last_name, email, stringer_name, racket_model,
        string_type, tension_v, tension_h, pickup_date, pickup_time, pickup_place,
        note})
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


// DELETE order
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a order'})
})

// UPDATE order
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a order'})
})

module.exports = router