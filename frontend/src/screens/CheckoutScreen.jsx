import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const CheckoutScreen = () => {
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.userAuth)

  useEffect(() => {
    if (!userInfo) {
      navigate(`/login?redirect=/checkout`)
    }

    return () => {}
  }, [userInfo, navigate])

  return <div>CheckoutScreen</div>
}

export default CheckoutScreen
