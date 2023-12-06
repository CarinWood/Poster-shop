import './header.css'
import ninjahead from '../../assets/images/ninjahead.svg'
import { FaShoppingCart } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
        <h1 className='heading'>Poster Shop</h1>
        <img 
            className='header-img'
            src={ninjahead} 
            alt="ninja head" 
        />
        <div className='cart-icon-frame'>
          <FaShoppingCart className='cart-icon'/> 
        </div>
    </header>
  )
}
