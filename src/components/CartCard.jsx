import { useCart } from '../context/CartContext';
import './CartCard.css'

function CartCard({product}) {
  const {name,image,price} = product;
  const {removeFromCart} = useCart()

  const handleRemove =()=>
  {
    removeFromCart(product)
  }

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className='productName'>{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default CartCard