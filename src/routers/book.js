const express = require('express')
const M_book = require('../models/M_book')
const router = new express.Router()

router.post('/books', async (req, res) => {
    const m_book = new M_book(req.body)

    try {
        await m_book.save()
        res.status(201).send(m_book)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/books', async (req, res) => {
    try {
        const books = await M_book.find({})
        res.send(books)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/books/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const books = await M_book.findById(_id)

        if (!books) {
            return res.status(404).send()
        }

        res.send(books)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/books/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['id_category', 'nm_book', 'detail','author','publisher','year','price','stock','updated_by','updated_at']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const book = await M_book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/books/:id', async (req, res) => {
    const {id} = req.params;
    try {
    let book = await M_book.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        book
    })
    }
    catch (e) {
        res.status(400).send(e)
    }

  });

router.delete('/books/:id', async (req, res) => {
    try {
        const book = await M_book.findByIdAndDelete(req.params.id)

        if (!book) {
            return res.status(404).send()
        }

        res.send(book)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router