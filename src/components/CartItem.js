import React from 'react'
import FormatPrice2 from '../Helpers/FormatPrice2'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/CartContext'
// import CartAmt from './CartAmt'
const CartItem = ({id, name, image, color, price, amount}) => {

  const {removeItem} = useCartContext();
  return (
    <div className='cart-heading grid grid-five-column'>
      <div className='cart-image--name'>
        <div>
          <figure>
            <img src={image} alt={name}></img>
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className='color-div'>
            <p>Color:</p>
            <div className='color-style' style={{backgroundColor: color, color: color}}></div>
          </div>
        </div>
      </div>
      <div className='cart-hide'>
        <p> <FormatPrice2 price = {price}/></p>
      </div>
      <div>
        <p>{amount}</p>
      </div>
      <div>
        <p><FormatPrice2 price = {amount*price}/></p>
      </div>
      <div>
        <FaTrash className = 'remove_icon' onClick={() => removeItem(id)}/>
      </div>
    </div>
  )
}

export default CartItem
