import './ProductCard.css'

function ProductCard({product}) {
  const {name,image,price,id} = product
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}

export default ProductCard