import { useShoppingCart } from '../../contexts/CartContext'
import { CartProduct } from '../cart-product/CartProduct'
import './cart.css'

export const Cart = () => {
  const {cart, setCart} = useShoppingCart()
  return (
    <section className='cart'>
        <h2 className='cart-headline'>Products in cart</h2>
        <div className='banner'>
          <p>Item</p>
          <p>Quantity</p>
          <p>Price</p>
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

        <button className='gimmie-btn'>Gimmie gimmie gimmie!</button>
    </section>
  )
}
