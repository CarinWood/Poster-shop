import {FC} from 'react'
import "./card.css";
import { useShoppingCart } from '../../contexts/CartContext';


interface CardProps {
    title: string
    img: string
}

export const Card:FC<CardProps> = ({title, img}) => {

  const {cart, setCart} = useShoppingCart()

  console.log(cart)

  return (
    <div className="card">
      <img className="card-img" src={img} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto?
        Reprehenderit eaque temporibus reiciendis commodi!
      </p>

      <button className="card-btn">Oh, take my money!</button>
    </div>
  );
};
