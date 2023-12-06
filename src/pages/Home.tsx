import { BigCard } from "../components/big-card/BigCard"
import { Card } from "../components/card/Card"
import { Header } from "../components/header/Header"
import { bigPosters } from "../data/big-poster-data"
import { smallPosters } from "../data/small-poster-data"

export const Home = () => {
  return (
    <>
    <Header/>
    <div className='poster-area'>
    {smallPosters.map((poster) => {
      return <Card 
                key={poster.id} 
                title={poster.title} 
                img={poster.img}
              />
    })}

    {bigPosters.map((poster) => {
      return <BigCard 
                key={poster.id} 
                img={poster.img} 
                title={poster.title}
              />
    })}

    </div>
    </>
  )
}
