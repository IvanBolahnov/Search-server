const express = require('express')

const booksRouter = require('./booksRouter')

const router = new express()

router.use('/books', booksRouter)

module.exports = router