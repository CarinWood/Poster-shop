import { useShoppingCart } from '../../contexts/CartContext'
import { CartProduct } from '../cart-product/CartProduct'
import './cart.css'

export const Cart = () => {
  const {cart, setCart} = useShoppingCart()

  const message = () => {
    alert('Thank you for your purchase!')
  }

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.quantity * item.price, 0);
    const formattedTotal = parseFloat(total.toFixed(2))
        return formattedTotal;
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
            {cart.length === 0 ?
            <div className='no-poster-msg'>There's no posters in your cart yet :-(</div>
            :
            <>
            {cart.map(item => {
              return <CartProduct key={item.id} {...item}/>
            })}
            </>
            }
        <div className='divider'></div>
        <div className='summary'>
          <p>Total</p>
          <p></p>
          <p className='total'>€{calculateTotal()}</p>
        </div>
        {cart.length > 0 &&
        <div className='gimmie-btn-area'>    
          <button className='gimmie-btn' onClick={message}>Gimmie gimmie gimmie!</button>
        </div>
        }
    </section>
  )
}
