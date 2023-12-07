import { FC } from 'react'
import './bigCard.css'
import { useShoppingCart } from '../../contexts/CartContext'

interface BigCardProps {
    _id: number
    _img: string
    _title: string
    _price: number
}

export const BigCard:FC<BigCardProps> = ({_id, _img, _title, _price}) => {
  const {cart, setCart, handlePlus} = useShoppingCart()
  
  const addToCart= () => {
    const alreadyInCart = cart.findIndex(item => item.id === _id)
    if(alreadyInCart !== -1) {
      handlePlus(_id)
    } else {
      const product = {
        id: _id,
        title: _title,
        img: _img,
        price: _price,
        quantity: 1,
        
      }

      setCart([...cart, product])
    }
  }

  return (
    <div className="big-card">
      <img className="big-card-img" src={_img} alt={_title} />
      <article>
        <p className="big-card-title">{_title}</p>
        <p className='big-card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            neque quas iste perferendis, sapiente optio!
        </p>
        <button className='big-card-btn' onClick={addToCart}>Oh, take my money!</button>
      </article>
    </div>

  );
}
