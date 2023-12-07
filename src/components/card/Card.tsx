import {FC} from 'react'
import "./card.css";
import { useShoppingCart } from '../../contexts/CartContext';

type posterItem = {
  id: number
  title: string
  img: string
  price: number
  quantity: number
}

interface CardProps {
    _id: number
    _title: string
    _img: string
    _price: number,
    posters: posterItem[]
}

export const Card:FC<CardProps> = ({_id, _title, _img, _price, posters}) => {

  const {cart, setCart, handlePlus} = useShoppingCart()

 


  const addToCart = () => {
    const productExists = cart.findIndex(item => item.id === _id)
    if(productExists !== -1) {
      handlePlus(_id)

    } else {
      const product = 
      {
        id: _id,
        title: _title,
        img: _img,
        price: _price,
        quantity: 1
      }

    setCart(cart => [...cart, product])
    }
    
  }

  return (
    <div className="card">
      <img className="card-img" src={_img} alt={_title} />
      <h2 className="card-title">{_title}</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto?
        Reprehenderit eaque temporibus reiciendis commodi!
      </p>
      <div className='btnPrice'>
      <button className="card-btn" onClick={addToCart}>Oh, take my money!</button>
      <p className='price'>€ {_price}</p>
      </div>
 
    </div>
  );
};
