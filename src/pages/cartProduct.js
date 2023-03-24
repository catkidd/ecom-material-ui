import React from 'react'
import { useSelector } from 'react-redux'


const CartProduct = () => {
    const product = useSelector((state) => state.cart);
  return (
    <div>
        <h1>Product Details</h1>
        <h2>{product.title}</h2>
        <img src={product.image} 
            alt="" 
            width={200}>
            
        </img>
        <p>{product.description}</p>
    </div>
  )
}

export default CartProduct;