import './cartProduct.css'
import { CartItem } from '../../types/cartTypes'
import { FC } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { useShoppingCart } from '../../contexts/CartContext';

interface CartProductProps extends CartItem {}

export const CartProduct:FC<CartProductProps> = ({title, quantity, price, id}) => {
  const {cart, setCart} = useShoppingCart();

  const deleteItem = () => {
      const updatedArray = cart.filter(product => product.id !== id)
      setCart(updatedArray)
  }


  return (
    <div className='cart-product'>
    <p className='title-box'>Poster {title}</p> 
    <p className='quantity-box'>{quantity}</p>
 
        <p>€{price}</p> 
        <span onClick={deleteItem}><FaRegWindowClose className='delete-icon'/></span>

    </div>  
  )
}
