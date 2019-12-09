const mongoose = require('mongoose')

const M_purchase_a = mongoose.model('M_purchase_a', {
    id_user: {
        type: String,
        required: true,
        trim: true
    },
    shipping_address: {
        type: String,
        required: true,
        trim: true
    },
    total_price: {
        type: Number,
        required: true,
        trim: true
    },
    created_by: {
        type: String,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        trim: true
    },
    updated_by: {
        type: String,
        trim: true
    },
    updated_at: {
        type: Date,
        default: Date.now,
        trim: true
    },


})

module.exports = M_purchase_a