const mongoose = require('mongoose')

const M_book = mongoose.model('M_book', {
    id_category: {
        type: String,
        required: true,
        trim: true
    },
    nm_book: {
        type: String,
        required: true,
        trim: true
    },
    detail: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    publisher: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    },
    Picture: {
        type: String,
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

module.exports = M_book