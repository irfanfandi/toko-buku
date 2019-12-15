const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get('/auth/:name/:password',async(req,res)=>{
    const _name = req.params.name
    const _password = req.params.password

    try {
        const auth = await User.find({ $and: [ { name: _name },{ password: _password }] })
        res.send(auth)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router