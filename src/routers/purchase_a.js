const express = require('express')
const M_purchase_a = require('../models/T_purchase_a')
const router = new express.Router()

router.post('/purchase_a', async (req, res) => {
    const m_purchase_a = new M_purchase_a(req.body)

    try {
        await m_purchase_a.save()
        res.status(201).send(m_purchase_a)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/purchase_a', async (req, res) => {
    try {
        const purchase = await M_purchase_a.find({})
        res.send(purchase)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/purchase_a/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const purchase = await M_purchase_a.findById(_id)

        if (!purchase) {
            return res.status(404).send()
        }

        res.send(purchase)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/purchase_a/:id', async (req, res) => {
    const {id} = req.params;
    try {
    let purchase = await M_purchase_a.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        purchase
    })
    }
    catch (e) {
        res.status(400).send(e)
    }

  });

router.delete('/purchase_a/:id', async (req, res) => {
    try {
        const purchase = await M_purchase_a.findByIdAndDelete(req.params.id)

        if (!purchase) {
            return res.status(404).send()
        }

        res.send(purchase)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router