import React from 'react'
import { useState } from 'react'

const Product = () => {

  // 🧊 state 
  const [quantity, setQuantity] = useState(1)
  const price = 1000
  const total = price * quantity

  // 이벤트 함수
  const increase = () => {
    setQuantity(quantity + 1)
  }

  const decrease = () => {
    if( quantity > 1 )
      setQuantity(quantity - 1)
  }

  
  return (
    <div>
        <h2>상품 정보</h2>
        <ul>
            <li>가격 : {price}</li>
            <li>수량 : {quantity}</li>
            <li>총 가격 : {total}</li>
        </ul>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
    </div>
  )
}

export default Product