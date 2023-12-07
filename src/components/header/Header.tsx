import './header.css'
import ninjahead from '../../assets/images/ninjahead.svg'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useShoppingCart } from '../../contexts/CartContext';

export const Header = () => {
  const navigate = useNavigate()
  const {cart} = useShoppingCart()


  const toCheckoutPage = () => {
    navigate('/checkout')
  }

  const calculateQuantity = () => {
    let sum = 0;
     for (let i = 0; i < cart.length; i++) {
        sum += cart[i].quantity;      
     }
      return sum
  }


  return (
    <header>
        <h1 className='heading'>Poster Shop</h1>
   
        <img 
            className='header-img'
            src={ninjahead} 
            alt="ninja head" 
        />
        <div className='cart-icon-frame' onClick={toCheckoutPage}>

          <FaShoppingCart className='cart-icon'/> 
          <p className='digit'>{calculateQuantity()}</p>

        </div>
    </header>
  )
}
