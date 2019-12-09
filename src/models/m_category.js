const mongoose = require('mongoose')

const M_category = mongoose.model('M_category', {
    nm_category: {
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

module.exports = M_category