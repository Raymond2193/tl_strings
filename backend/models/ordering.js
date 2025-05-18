const mongoose = require('mongoose')

const schema = mongoose.Schema
const orderingSchema = new schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    stringer_name:{
        type: String,
        required: true
    },
    racket_model:{
        type: String,
        required: true
    },
    string_type:{
        type: String,
        required: true
    },
    tension_v: {
        type: Number,
        required: true
    },
    tension_h: {
        type: Number,
        required: true
    },
    pickup_date:{
        type: String,
        required: true
    },
    pickup_time:{
        type: String,
        required: true
    },
    pickup_place:{
        type: String,
        required: true
    },
    note:{
        type: String,
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', orderingSchema)