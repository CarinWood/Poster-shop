import './App.css';
import { BigCard } from './components/big-card/BigCard';
import { Card } from './components/card/Card';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { bigPosters } from './data/big-poster-data';
import { smallPosters } from './data/small-poster-data';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={  <Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
   
      <Footer/>
    </div>
  );
}

export default App;
