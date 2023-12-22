import facebook from '../../assets/icons/Facebook.png';
import instagram from '../../assets/icons/instagram.png';
import  '../Footer/Footer.css';


const Footer = () => {
 return (
    <footer className="footer">
      <div className="footer-social">
        <h1 className='text-footer'>Seguinos en nuestras redes sociales</h1>
        <a href="https://www.instagram.com/vitestore_3d/" target='blank' className="footer-icon">
          <img src={instagram} alt="logo con redireccion a instagram" />
        </a>
        <a href="#" target='blank' className="footer-icon">
          <img src={facebook} alt="logo con redireccion a facebook" />
        </a>
      </div>
      <div className="footer-copyright">
        <p>COPYRIGHTS SITE.COM. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
 );
};

export default Footer;