import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import ProductDetailsScreen from "./screens/ProductDetailsScreen"
import ShopScreen from "./screens/ShopScreen"

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
              <Route path="/shop/:id" element={<ProductDetailsScreen />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App
