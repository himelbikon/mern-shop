import React from "react"
import { Alert } from "react-bootstrap"

const Message = ({ children, variant }) => {
  return (
    <Alert className="my-2" variant={variant}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: "danger",
}

export default Message
