const sequelize = require("../db")
const { DataTypes } = require("sequelize")

const Books = sequelize.define("books", {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	tag: { type: DataTypes.STRING },
	name: { type: DataTypes.STRING },
	year: { type: DataTypes.STRING },
	author: { type: DataTypes.STRING }
})

module.exports = {
	Books
}
