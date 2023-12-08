import './footer.css'
import twitter from '../../assets/images/logo-twitter.svg'
import facebook from '../../assets/images/logo-facebook.svg'
import linkedin from '../../assets/images/logo-linkedin.svg'
import instagram from '../../assets/images/logo-instagram.svg'

export const Footer = () => {
  return (
    <footer>
      <div className='nav'>
        <h2 className='footer-headline'>Nav</h2>
        <p>Products</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      <div className='address'>
        <h2 className='footer-headline'>Address</h2>
        <p>Posterstreet 32</p>
        <p>888 81 Poster Hills</p>
      </div>
      <div className='socials'>
        <h2 className='footer-headline'>Social Media</h2>
        <div className='icons'>
          <img src={twitter} alt="twitter" className='icon'/>
          <img src={facebook} alt="facebook" className='icon'/>
          <img src={linkedin} alt="linkedin" className='icon'/>
          <img src={instagram} alt="instagram" className='icon'/>
        </div>
      </div>
      <p className='credits'>Created and built by Carin Wood</p>
    </footer>
  )
}
