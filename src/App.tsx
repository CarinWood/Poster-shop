import './App.css';
import { Card } from './components/card/Card';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { smallPosters } from './data/small-poster-data';

function App() {
  return (
    <div className="app">
      <Header/>
      {smallPosters.map((poster) => {
        return <Card key={poster.id} {...poster} />
      })}
      <Footer/>
    </div>
  );
}

export default App;
