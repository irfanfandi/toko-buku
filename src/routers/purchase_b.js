const express = require('express')
const M_purchase_b = require('../models/T_purchase_b')
const router = new express.Router()

router.post('/purchase_b', async (req, res) => {
    const m_purchase_b = new M_purchase_b(req.body)

    try {
        await m_purchase_b.save()
        res.status(201).send(m_purchase_b)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/purchase_b', async (req, res) => {
    try {
        const purchase = await M_purchase_b.find({})
        res.send(purchase)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/purchase_b/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const purchase = await M_purchase_b.findById(_id)

        if (!purchase) {
            return res.status(404).send()
        }

        res.send(purchase)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/purchase_b/:id', async (req, res) => {
    const {id} = req.params;
    try {
    let purchase = await M_purchase_b.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        purchase
    })
    }
    catch (e) {
        res.status(400).send(e)
    }

  });

router.delete('/purchase_b/:id', async (req, res) => {
    try {
        const purchase = await M_purchase_b.findByIdAndDelete(req.params.id)

        if (!purchase) {
            return res.status(404).send()
        }

        res.send(purchase)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router