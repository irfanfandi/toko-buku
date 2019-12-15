const { model, Schema } = require('mongoose')

const Transaction = new Schema({
    id_purchase_a: {
        type: String,
        trim: true
    },
	id_user : {
		type: String,
        required: true,
        trim: true
	},
    id_book: {
        type: String,
        required: true,
        trim: true
    },
    qty: {
        type: Number,
        required: true,
        trim: true
    },
	price: {
        type: Number,
        required: true,
        trim: true
    },
    total_price: {
        type: Number,
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

Transaction.pre('save', async function(next) {

    this.total_price = this.qty * this.price
    next()
})
Transaction.pre('update', async function(next) {

    this.total_price = this.qty * this.price
    next()
})
  
const M_purchase_b = model('M_purchase_b', Transaction)
module.exports = M_purchase_b