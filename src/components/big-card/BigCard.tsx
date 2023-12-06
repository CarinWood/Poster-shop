import { FC } from 'react'
import './bigCard.css'

interface BigCardProps {
    img: string
    title: string
}

export const BigCard:FC<BigCardProps> = ({img, title}) => {
  return (
    <div className="big-card">
      <img className="big-card-img" src={img} alt={title} />
      <article>
        <p className="big-card-title">{title}</p>
        <p className='big-card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            neque quas iste perferendis, sapiente optio!
        </p>
        <button className='big-card-btn'>Oh, take my money!</button>
      </article>
    </div>

  );
}
