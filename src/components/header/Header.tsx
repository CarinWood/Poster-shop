import './header.css'
import ninjahead from '../../assets/images/ninjahead.svg'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()


  const toCheckoutPage = () => {
    navigate('/checkout')
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
          <p className='digit'>4</p>

        </div>
    </header>
  )
}
