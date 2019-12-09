const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const query = User.find();

router.get('/auth/:name/:password',async(req,res)=>{
    const _name = req.params.name
    const _password = req.params.password

    try {
        // const auth = await query.$where([{ name: _name } && { password: _password }])      
        // const auth = await query.$where(this.name == _name && this.password == _password)
        const auth = await query.$where( () => {
            return this.name == _name && this.password == _password;
          })
        res.send(auth)
    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router