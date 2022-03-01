import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Table, Button, Form } from "react-bootstrap"
import { addToCart, deleteFromCart } from "../actions/cartActions"

const CartScreen = () => {
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  const linkStyle = { textDecoration: "none", color: "inherit" }

  const cartAddHandler = (product, qty) => {
    dispatch(addToCart(product, qty))
  }

  const cartDeleteHandler = (id) => {
    dispatch(deleteFromCart(id))
  }

  return (
    <div>
      <Table hover className="my-2">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.product._id}>
              <td>
                <Link to={`/shop/${item.product._id}`} style={linkStyle}>
                  {item.product.name}
                </Link>
              </td>
              <td>${item.product.price}</td>
              <td>
                <Form.Control
                  as="select"
                  value={item.quantity}
                  onChange={(e) => cartAddHandler(item.product, e.target.value)}
                >
                  {[...Array(item.product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => cartDeleteHandler(item.product._id)}
                >
                  x
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CartScreen
