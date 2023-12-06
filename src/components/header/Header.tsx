import './header.css'
import ninjahead from '../../assets/images/ninjahead.svg'

export const Header = () => {
  return (
    <header>
        <h1 className='heading'>Poster Shop</h1>
        <img 
            className='header-img'
            src={ninjahead} 
            alt="ninja head" 
        />
    </header>
  )
}
