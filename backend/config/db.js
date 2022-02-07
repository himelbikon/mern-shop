const mongoose = require("mongoose")

const connectDB = async () => {
  // console.log("process.env.MONGO_URI", process.env.MONGO_URI)
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI) // Add empty object here if any error shows

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

module.exports = connectDB
