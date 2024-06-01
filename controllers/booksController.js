const { Books } = require("../models/index")

class BooksController {
	async create(req, res) {
		const { tag, name, year, author } = req.body

		if (!name || !tag || !year || !author) {
			return res.status(400).json({
				error: "недостаточно данных",
			})
		}

		const book = await Books.create({ tag, name, author, year })
		return res.status(200).json(book)
	}

	async get(_, res) {
		const books = await Books.findAll()

		return res.status(200).json(books)
	}

	async update(req, res) {
		const { id } = req.params
		const { tag, name, year, author } = req.body

		try {
			const book = await Books.update(
				{ tag, name, year, author },
				{ where: { id }, returning: true }
			)
			return res.status(200).json(book)
		} catch (error) {
			return res.status(500).json({ error })
		}
	}

	async delete(req, res) {
		const { id } = req.params

		try {
			const book = await Books.destroy({ where: { id } })
			return res.status(200).json(book)
		} catch (error) {
			return res.status(500).json(error)
		}
	}
}

module.exports = new BooksController()
