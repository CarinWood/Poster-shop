import './App.css';
import { BigCard } from './components/big-card/BigCard';
import { Card } from './components/card/Card';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { bigPosters } from './data/big-poster-data';
import { smallPosters } from './data/small-poster-data';

function App() {
  return (
    <div className="app">
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
        return <BigCard img={poster.img} title={poster.title}/>
      })}

      </div>
      <Footer/>
    </div>
  );
}

export default App;
