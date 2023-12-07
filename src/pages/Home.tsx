import {useState} from 'react'
import { BigCard } from "../components/big-card/BigCard"
import { Card } from "../components/card/Card"
import { Header } from "../components/header/Header"
import { bigPosters } from "../data/big-poster-data"
import { smallPosters } from "../data/small-poster-data"

export const Home = () => {
  const [posters, setPosters] = useState(smallPosters)
  return (
    <>
    <Header/>
    <div className='poster-area'>
    {smallPosters.map((poster) => {
      return <Card 
                key={poster.id} 
                _id={poster.id}
                _title={poster.title} 
                _img={poster.img}
                _price={poster.price}
                posters={posters}
              />
    })}

    {bigPosters.map((poster) => {
      return <BigCard 
                key={poster.id} 
                _id={poster.id}
                _img={poster.img} 
                _title={poster.title}
                _price={poster.price}

              />
    })}

    </div>
    </>
  )
}
