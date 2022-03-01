import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import ShopScreen from "./screens/ShopScreen"
import CartScreen from "./screens/CartScreen"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/shop" element={<ShopScreen />} />
              <Route path="/shop/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
