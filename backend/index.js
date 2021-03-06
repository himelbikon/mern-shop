const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")
const morgan = require("morgan")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
const showcaseRoutes = require("./routes/showcaseRoutes")
const subscriptionRoutes = require("./routes/subscriptionRoutes")
const userRoutes = require("./routes/userRoutes")
const orderRoutes = require("./routes/orderRoutes")
const testRoutes = require("./routes/testRoutes")

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
  app.get("/", (req, res) => {
    res.send("Api is running...")
  })
}

// -------------------- Routes --------------------
app.use("/api/products", productRoutes)
app.use("/api/categories", categoryRoutes)
app.use("/api/showcases", showcaseRoutes)
app.use("/api/subscriptions", subscriptionRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/test", testRoutes)

if (process.env.NODE_ENV == "production") {
  app.use(express.static("backend/build"))

  const path = require("path")

  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "backend/build", "index.html"))
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}`.brightGreen))
