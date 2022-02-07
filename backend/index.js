const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")
const morgan = require("morgan")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(notFound)
app.use(errorHandler)

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
  app.get("/", (req, res) => {
    res.send("Api is running!")
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}`.brightGreen))
