import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import ShopScreen from "./screens/ShopScreen"
import CartScreen from "./screens/CartScreen"
import CheckoutScreen from "./screens/CheckoutScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import OrderScreen from "./screens/OrderScreen"

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
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/orders" element={<OrderScreen />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
