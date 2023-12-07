import { useShoppingCart } from '../../contexts/CartContext'
import { CartProduct } from '../cart-product/CartProduct'
import './cart.css'

export const Cart = () => {
  const {cart, setCart} = useShoppingCart()

  const message = () => {
    alert('Thank you for your purchase!')
  }

 

  return (
    <section className='cart'>
        <h2 className='cart-headline'>Products in cart</h2>
        <div className='banner'>
          <p>Item</p>
          <p>Quantity</p>
          <p>Price</p>
          <span></span>
        </div>
            {cart.map(item => {
              return <CartProduct key={item.id} {...item}/>
            })}
        <div className='divider'></div>
        <div className='summary'>
          <p>Total</p>
          <p></p>
          <p>€123</p>
        </div>

        <div className='gimmie-btn-area'>    
          <button className='gimmie-btn' onClick={message}>Gimmie gimmie gimmie!</button>
        </div>
    </section>
  )
}
