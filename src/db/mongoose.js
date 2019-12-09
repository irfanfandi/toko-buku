const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/toko-online', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})