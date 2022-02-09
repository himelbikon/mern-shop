import React from "react"
import { Spinner } from "react-bootstrap"
const Loader = () => {
  const style = {
    width: "100px",
    height: "100px",
  }

  return (
    <div className="text-center">
      <Spinner animation="border" role="status" style={style}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader
