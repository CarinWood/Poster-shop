import './cartProduct.css'
import { CartItem } from '../../types/cartTypes'
import { FC } from 'react'

interface CartProductProps extends CartItem {}

export const CartProduct:FC<CartProductProps> = ({title, quantity, price}) => {
  return (
    <div className='cart-product'>
    <p>Poster {title}</p> 
    <p>{quantity}</p>
    <p>€{price}</p>
    </div>
  )
}
