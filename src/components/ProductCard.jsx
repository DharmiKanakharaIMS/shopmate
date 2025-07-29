import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({product}) {
  const {name,image,price,id} = product
  const {addToCart,cartList,removeFromCart} =  useCart()
  const [inCart, setinCart] = useState(false)

  useEffect(()=>
  {
    const isInCart = cartList.find(cartItem=> cartItem.id === id)
    if(isInCart)
    {
      setinCart(true)
    }
    else
    {
      setinCart(false)
    }
  },[cartList])

  const handleAdd = () =>
  {
    addToCart(product);    
  }
  const handleRemove = () =>
  {
    removeFromCart(product);    
  }
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className="action">
        <p>${price}</p>
        {
          inCart ? <button className='remove' onClick={handleRemove}>Remove</button> : 
          <button onClick={handleAdd}>Add To Cart</button>
        }
        
      </div>
    </div>
  )
}

export default ProductCard