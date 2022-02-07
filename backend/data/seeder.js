const dotenv = require("dotenv")
const connectDB = require("../config/db")
const colors = require("colors")
const random = require("random")

const Category = require("../models/categoryModel")
const Product = require("../models/productModel")
const User = require("../models/userModel")

const users = require("./users")
const categories = require("./categories")
const products = require("./products")

dotenv.config()
connectDB()

const importData = async () => {
  try {
    console.log(`[+] Importing data...`.green)

    await Category.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdCategories = await Category.insertMany(categories)

    const createdUser = await User.insertMany(users)
    const adminUser = createdUser[0]._id

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
        category:
          createdCategories[random.int(0, createdCategories.length - 1)],
      }
    })

    await Product.insertMany(sampleProducts)

    console.log(`[+] Data imported successfully!`.green.inverse)

    process.exit()
  } catch (error) {
    console.log(`Something is wrong...`.red)
    console.error(`${error}`.red)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    console.log(`[+] Destroying all data...`.green)

    await Category.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    process.exit()
  } catch (error) {
    console.log(`Something is wrong...`.red)
    console.error(`${error}`.red)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
