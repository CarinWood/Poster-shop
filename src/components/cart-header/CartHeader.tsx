import './cartHeader.css'
import ninjahead from '../../assets/images/ninjahead.svg'

export const CartHeader = () => {
  return (
    <>
        <div className='cart-header'>
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
