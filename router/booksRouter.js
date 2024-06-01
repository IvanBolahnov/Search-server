const express = require("express")
const router = new express()

const BooksController = require("../controllers/booksController")

router.get("/", BooksController.get)
router.post("/", BooksController.create)
router.delete("/:id", BooksController.delete)
router.patch("/:id", BooksController.update)

module.exports = router
