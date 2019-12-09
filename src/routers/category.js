const express = require('express')
const M_category = require('../models/M_category')
const router = new express.Router()

router.post('/categorys', async (req, res) => {
    const m_category = new M_category(req.body)

    try {
        await m_category.save()
        res.status(201).send(m_category)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/categorys', async (req, res) => {
    try {
        const categorys = await M_category.find({})
        res.send(categorys)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/categorys/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const categorys = await M_category.findById(_id)

        if (!categorys) {
            return res.status(404).send()
        }

        res.send(categorys)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/categorys/:id', async (req, res) => {
    const {id} = req.params;
    try {
    let categorys = await M_category.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        categorys
    })
    }
    catch (e) {
        res.status(400).send(e)
    }

  });

router.delete('/categorys/:id', async (req, res) => {
    try {
        const categorys = await M_category.findByIdAndDelete(req.params.id)

        if (!categorys) {
            return res.status(404).send()
        }

        res.send(categorys)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router