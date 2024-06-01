require("dotenv").config()
const express = require("express")
const cors = require("cors")
const sequelize = require("./db")
const router = require("./router/index")

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/api", router)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(port, () => console.log(`server started on port: ${port}`))
	} catch (error) {
		console.log(`ERROR: ${error}`)
	}
}

start()
