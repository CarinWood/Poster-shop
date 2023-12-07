import './cartHeader.css'
import ninjahead from '../../assets/images/ninjahead.svg'
import { useNavigate } from 'react-router-dom'

export const CartHeader = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  return (
    <>
        <div className='cart-header'>
          <p className='back' onClick={goBack}>Back to Shop</p>
            <h1 className='heading'>Checkout</h1>
            <img 
                className='header-img'
                src={ninjahead} 
                alt="ninja head" 
            />
            
        </div>
    </>
  )
}
